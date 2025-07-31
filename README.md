# RescueMed Web Application

RescueMed is an **emergency ambulance and hospital communication platform** designed to enhance real-time communication between ambulance staff and hospitals. This repository contains the **web application** built with **Next.js**, integrated with **Resend** for sending emails, including notifications, alerts, and user communications.

The web platform allows hospitals to monitor patient updates sent from ambulances via the RescueMed mobile app, ensuring timely medical preparation and faster response during emergencies.

## Features

- **Real-Time Hospital Dashboard:** Receive and display patient information sent from the ambulance mobile app
- **Email Notifications (via Resend):** Automatic emails for alerts, confirmations, and communication between system components
- **Secure and User-Friendly Interface:** Responsive dashboard with a focus on clarity for hospital staff
- **Integration with Mobile App:** Data from ambulances is seamlessly transmitted to the web dashboard

## Tech Stack

- **Frontend & Server-Side Rendering:** Next.js
- **Styling:** Tailwind CSS
- **Email Services:** Resend
- **Deployment:** Vercel
- **Other Tools:** Node.js, TypeScript, and Firebase Cloud Functions.

## Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rescuemed-web.git
cd rescuemed-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the required variables:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_API_BASE_URL=your_backend_api_url
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app running.

## Deployment

- **Recommended:** Deploy using [Vercel](https://vercel.com), which provides seamless integration with Next.js
- Make sure to configure environment variables on the deployment platform

## Email Service Integration (Resend)

We use **Resend** to send system emails:

- Alert notifications
- Account confirmation emails
- System messages

Make sure your **Resend API Key** is added to `.env.local` as shown above.

## Contribution Guidelines

1. Fork the repository
2. Create a new feature branch
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes
4. Push to your branch and create a Pull Request

## License

This project is developed for **educational and demonstration purposes**.

