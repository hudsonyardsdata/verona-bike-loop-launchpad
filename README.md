# Verona Bike Loop

A website and advocacy platform for building bike-friendly, pedestrian-safe neighborhoods in Verona, NJ.

## Overview

The Verona Bike Loop is a community initiative to create a protected bike route connecting all major destinations in Verona through 8 key stops, safe crossing points, dedicated bike lanes, and proper infrastructure.

## Features

- **Our Story**: Learn about the vision and founders behind the Verona Bike Loop
- **Our Proposal**: Detailed plans including the 8-stop loop, crossing buttons, bike lanes, and parking infrastructure
- **Join Us**: Sign up to support the movement and contribute to making Verona bike-friendly
- **Partnership**: Integration with Montclair Bike & Walk, our partner nonprofit organization

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom green/blue/yellow color scheme
- **UI Components**: Radix UI + shadcn/ui
- **Backend**: Appwrite (Database & API)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Appwrite CLI (for database setup)
- An Appwrite account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/verona-bike-loop-launchpad.git
   cd verona-bike-loop-launchpad
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Set up Appwrite:
   - Create an Appwrite project at [cloud.appwrite.io](https://cloud.appwrite.io)
   - Run the setup script:
     ```bash
     ./setup-appwrite-collections.sh
     ```
   - Follow the prompts to create the database and collection
   - Update `.env.local` with your Appwrite credentials

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Schema

### SupporterSignups Collection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Full name of the supporter |
| email | string | Yes | Email address |
| hometown | string | Yes | Supporter's hometown |
| zipcode | string | Yes | 5-digit zipcode |
| howCanYouHelp | string | No | How they'd like to contribute |
| submittedAt | string | Yes | ISO timestamp of submission |

## Environment Variables

See `.env.example` for all required environment variables:

- `NEXT_PUBLIC_APPWRITE_ENDPOINT`: Your Appwrite endpoint
- `NEXT_PUBLIC_APPWRITE_PROJECT_ID`: Your Appwrite project ID
- `NEXT_PUBLIC_APPWRITE_DATABASE_ID`: Database ID
- `NEXT_PUBLIC_APPWRITE_COLLECTION_SUPPORTERS`: Supporter signups collection ID
- `APPWRITE_API_KEY`: Server-side API key (keep secret!)

## Project Structure

```
verona-bike-loop-launchpad/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── api/               # API routes
│   │   ├── join-us/           # Join Us page
│   │   ├── our-proposal/      # Our Proposal page
│   │   ├── our-story/         # Our Story page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── assets/                # Images and static assets
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Navigation.tsx    # Navigation component
│   │   └── Footer.tsx        # Footer component
│   ├── hooks/                 # React hooks
│   └── lib/                   # Utility functions
│       ├── api-client.ts     # Client-side API functions
│       ├── appwrite.ts       # Client-side Appwrite config
│       └── appwrite-server.ts # Server-side Appwrite config
├── public/                    # Public assets
├── setup-appwrite-collections.sh # Appwrite setup script
└── README.md                  # This file
```

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/verona-bike-loop-launchpad)

Make sure to add all environment variables in your Vercel project settings.

## Color Scheme

The website uses a nature-inspired color palette:

- **Primary (Nature Green)**: `hsl(142 71% 45%)`
- **Secondary (Sky Blue)**: `hsl(199 89% 48%)`
- **Accent (Reflective Yellow)**: `hsl(54 100% 62%)`
- **Destructive (Red Reflector)**: `hsl(0 84.2% 60.2%)`

## Contributing

We welcome contributions! Please feel free to submit issues or pull requests.

## Partner Organization

This project works in partnership with [Montclair Bike & Walk](https://www.bikewalkmontclair.org/), a registered 501(c)(3) nonprofit focused on pedestrian safety and bike advocacy in Essex County, NJ.

## License

This project is open source and available under the MIT License.

## Contact

For questions or to get involved, visit our [Join Us](http://localhost:3000/join-us) page or reach out to our partner organization, Montclair Bike & Walk.
