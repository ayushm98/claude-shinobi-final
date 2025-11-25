# Shinobi Blog

This is a modern blog application called **Shinobi**, built with Next.js 15. The application demonstrates modern web development practices and features a clean, component-based architecture.

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- **Next.js 15** with App Router and Turbopack for fast development
- **React 19** with TypeScript for type-safe development
- **Tailwind CSS v4** with custom theming and dark mode support
- **Component Library** with reusable UI components (Buttons, Cards, Avatars, Modals, Icons)
- **Blog System** with mock data (configurable for CMS integration)
- **Vitest** for testing with React Testing Library
- **Responsive Design** that works on all devices

## Running the app

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header and dark mode toggle
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog listing and individual posts
│   ├── about/             # About page
│   └── preview/           # Component preview page
├── components/            # Reusable React components
│   ├── ui/                # UI component library
│   ├── BlogSidebar.tsx    # Blog sidebar
│   └── DarkModeToggle.tsx # Theme switching
├── lib/                   # Utility functions and types
│   ├── mockData.ts        # Mock blog data
│   ├── queries.ts         # GraphQL queries (for CMS)
│   ├── types.ts           # TypeScript types
│   └── sanitize.ts        # HTML sanitization
└── hooks/                 # Custom React hooks
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI

## Contributing

Feel free to submit issues and pull requests!
