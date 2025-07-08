# Email Configuration Setup

This project uses Resend for sending emails from the contact form. Follow these steps to set up email functionality:

## 1. Sign up for Resend

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## 2. Get your API Key

1. Log into your Resend dashboard
2. Go to the API Keys section
3. Create a new API key
4. Copy the API key

## 3. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and replace `your_resend_api_key_here` with your actual Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

## 4. Configure Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., yourdomain.com)
3. Follow the verification process by adding DNS records
4. Once verified, update the `from` field in `/app/api/contact/route.ts`:
   ```typescript
   from: 'RescueMed Contact Form <noreply@yourdomain.com>',
   ```

## 5. Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section on your website
3. Fill out and submit the contact form
4. Check that the email is received at info@waveloop.dev

## Email Template Features

The email template includes:
- Professional styling with RescueMed branding
- User's contact information (name, email, date)
- The message content with proper formatting
- Reply-to functionality for easy responses

## Troubleshooting

- **Email not sending**: Check that your RESEND_API_KEY is correctly set in `.env.local`
- **API errors**: Check the browser console and Next.js logs for error details
- **Domain issues**: Ensure your domain is verified in Resend dashboard for production use

## Rate Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month

For higher volumes, consider upgrading to a paid plan.
