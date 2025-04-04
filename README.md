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
- Kinde account for authentication

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
