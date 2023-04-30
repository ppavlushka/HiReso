# HiReso

Web app built with Next.js and TailwindCSS to display high resolution images.

## Installation

Install dependencies:

```bash
npm install
# or
yarn
```

Add environment variables to `.env` file (see `.env.example`)

## Database

Build Prisma client:

```bash
npm run prisma:generate
# or
yarn prisma:generate
```

Push data schema to database:

```bash
npm run prisma:push
# or
yarn prisma:push
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Production

Build for production:

```bash
npm run build
# or
yarn build
```

## Built With

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
