# LunchBox Legends - Landing Page

LunchBox Legends is a modern promotional landing page built to showcase the LunchBox Legends platform before the official product launch.  

The website allows customers to:
- Learn about the product
- Explore features and branding
- Pre-register before launch
- Get notified when the platform officially goes live

All pre-registration data is securely stored using Firebase and can be monitored through the Vabook Business Portal admin system.

---

## Live Demo

- Website: https://lunchboxlegends.netlify.app/
- GitHub Repository: https://github.com/ajardeen/LunchBox
- Vabook Business Portal: https://github.com/ajardeen/vabook_business_portal

---

# Tech Stack

## Frontend
- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- Lenis Smooth Scroll

## Backend / Database
- Firebase

---

# Features

- Modern responsive landing page
- Smooth scrolling experience
- Animated UI interactions
- Product showcase sections
- Customer pre-registration system
- Firebase database integration
- Launch notification collection
- Admin monitoring through Vabook Business Portal
- Mobile-friendly design

---

# Project Structure

```bash
src/
│
├── components/
├── sections/
├── assets/
├── config/firebase
├── hooks/
└── layouts/
```
# Installation
Clone the repository:

```bash
git clone https://github.com/ajardeen/LunchBox.git

```

Navigate to the project folder:

```bash
cd LunchBox
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# Build for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# Environment Variables Setup

Create a `.env` file in the root directory and add the following Firebase configuration:

```env
# Essential Firebase Configuration
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_APP_ID=

# Optional, but keep with the rest for consistency
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```