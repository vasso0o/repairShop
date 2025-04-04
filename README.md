# Computer Repair Shop Management System

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), enhanced with features for managing a computer repair shop's customers, tickets, and employees.

## Key Features

- **Customer Management**  
  Create, edit, and track customer profiles with contact information and notes
- **Ticket System**  
  Manage repair tickets with OPEN/COMPLETED statuses and assignment tracking
- **Role-Based Access**  
  Three permission levels (Employee, Manager, Admin) with granular controls
- **Passwordless Authentication**  
  Secure employee login powered by Kinde Auth
- **Real-Time Updates**  
  Instant visibility into ticket status changes and assignments
- **Responsive Design**  
  Optimized for desktop and tablet use with light/dark mode support
- **Advanced Search**  
  Quickly find customers and tickets using powerful search functionality

## Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 19 with Server Components
- Tailwind CSS + Radix UI Primitives
- React Table for data management
- Zod & React Hook Form for validation

### Backend
- Next.js API Routes
- Drizzle ORM with Neon Serverless PostgreSQL
- Kinde for authentication & user management
- Next Safe Action for type-safe server actions

### Monitoring
- Sentry for error tracking

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (recommend Neon)
- [Kinde account](https://kinde.com) - Create a free account to get authentication keys
- [Sentry account](https://sentry.io) - Free tier available for error monitoring

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 with your browser to see the result.


```bash
npm install
npm run dev
```

Create .env file
Add these variables to a .env file in your root directory:

```env
DATABASE_URL=neon_connection_string
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=your_kinde_domain
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=/dashboard
AUTH_SECRET=your_random_secret_string
```

### Run database migrations

```bash
npx drizzle-kit generate:pg
npx drizzle-kit push:pg
```
