import { onRequest } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';
import { Resend } from 'resend';

// Load environment variables for local development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Set global options
setGlobalOptions({ maxInstances: 10 });

export const contact = onRequest(
  {
    cors: true,
  },
  async (request, response) => {
    // Initialize Resend with environment variable
    // For local development, use .env file or process.env
    // For production, Firebase will inject the environment variable
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not set');
      response.status(500).json({ error: 'Server configuration error' });
      return;
    }
    
    const resend = new Resend(apiKey);
    if (request.method !== 'POST') {
      response.status(405).json({ error: 'Method not allowed' });
      return;
    }

    try {
      const { name, email, message } = request.body;

      // Validate required fields
      if (!name || !email || !message) {
        response.status(400).json({ error: 'Missing required fields' });
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        response.status(400).json({ error: 'Invalid email address' });
        return;
      }

      // Sanitize inputs to prevent XSS
      const sanitizedName = name.replace(/[<>]/g, '');
      const sanitizedEmail = email.trim();
      const sanitizedMessage = message.replace(/[<>]/g, '');

      // Get current date and time
      const currentDate = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'UTC',
      });

      // Email template (same as your original)
      const emailTemplate = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px;">
          
          <!-- Header -->
          <div style="background: #4a90e2; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 22px;">Contact Submission Rescumed</h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
              
              <h2 style="color: #4a90e2; margin-top: 0; font-size: 18px; border-bottom: 2px solid #4a90e2; padding-bottom: 5px;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 100px;">Name:</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedName}</td>
                  </tr>
                  <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                          <a href="mailto:${sanitizedEmail}" style="color: #4a90e2; text-decoration: none;">${sanitizedEmail}</a>
                      </td>
                  </tr>
                  <tr>
                      <td style="padding: 10px 0; font-weight: bold;">Date:</td>
                      <td style="padding: 10px 0;">${currentDate}</td>
                  </tr>
              </table>
              
              <h2 style="color: #4a90e2; font-size: 18px; border-bottom: 2px solid #4a90e2; padding-bottom: 5px;">Message</h2>
              
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #4a90e2;">
                  ${sanitizedMessage.replace(/\n/g, '<br>')}
              </div>
              
          </div>
          
          <!-- Footer -->
          <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; color: #666;">
              <p style="margin: 0;">This email was sent from your website contact form.</p>
              <p style="margin: 5px 0 0 0;">Reply directly to ${sanitizedEmail} to respond.</p>
          </div>
          </div>
        </div>
      `;

      // Send email using Resend
      const data = await resend.emails.send({
        from: 'RescueMed Contact Form <info@waveloop.dev>',
        to: ['info@waveloop.dev'],
        subject: `New Contact Form Submission from ${sanitizedName}`,
        html: emailTemplate,
        replyTo: sanitizedEmail,
      });

      response.status(200).json({
        message: 'Email sent successfully',
        data,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      response.status(500).json({
        error: 'Failed to send email',
      });
    }
  }
);