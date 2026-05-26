# Tech You

Full-stack website built with React + Vite and an Express API server.

## Features
- Marketing site with animated sections
- Contact and project-request API endpoints
- Optional AI chatbot via Groq API

## Requirements
- Node.js 18+ (recommended)
- npm

## Getting started
1. Install dependencies:
   npm install
2. (Optional) Create a .env.local or .env file in the project root:
   MONGODB_URI=your_mongodb_connection_string
   GROQ_API_KEY=your_groq_api_key
  GROQ_MODEL=llama-3.1-8b-instant
3. Start the dev server:
   npm run dev
4. Open http://localhost:3000

## Production build
- Build the app:
  npm run build
- Start the server:
  npm start

## Logo asset
Place the logo image at public/techyou.png. The navbar, footer, and favicon all reference this file.

## Other scripts
- Typecheck:
  npm run lint
- Vite preview (after build):
  npm run preview

## Deployment
See DEPLOYMENT.md for step-by-step deployment instructions.
