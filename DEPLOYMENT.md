# Tech You - Deployment Guide

This guide provides exact steps to deploy the Tech You website (Frontend + Backend + Database).

## 1. Database Setup (MongoDB Atlas)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create an account.
2. Create a new cluster (the free tier is fine).
3. Under **Database Access**, create a new database user with a username and password.
4. Under **Network Access**, add `0.0.0.0/0` to allow access from anywhere (or restrict to your backend IP later).
5. Click **Connect** on your cluster, choose **Connect your application**, and copy the connection string.
   - It will look like: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority`
   - Replace `<username>` and `<password>` with the credentials you created.

## 2. Backend Deployment (Render)

1. Push your code to a GitHub repository.
2. Go to [Render](https://render.com/) and create an account.
3. Click **New +** and select **Web Service**.
4. Connect your GitHub account and select the repository.
5. Configure the service:
   - **Name**: `tech-you-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string from step 1.
   - `NODE_ENV`: `production`
   - `GEMINI_API_KEY`: Your Gemini API key for the chatbot.
7. Click **Create Web Service**. Render will build and deploy your backend.
8. Copy the Render URL (e.g., `https://tech-you-backend.onrender.com`).

## 3. Frontend Deployment (Vercel)

*Note: In this specific AI Studio setup, the frontend and backend are served together from the same Express server. If you want to deploy them separately, you would deploy the `dist` folder to Vercel and point the API calls to the Render backend URL.*

**To deploy the full-stack app to Vercel (Serverless):**

1. Go to [Vercel](https://vercel.com/) and create an account.
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository.
4. Configure the project:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variables:
   - `VITE_API_URL`: The URL of your backend (if separated).
   - `GEMINI_API_KEY`: Your Gemini API key.
6. Click **Deploy**.

**To deploy the full-stack app to Render (Recommended for this setup):**

Since this app uses an Express server to serve both the API and the built Vite frontend:
1. Follow the **Backend Deployment (Render)** steps above.
2. The Express server is already configured to serve the static files from the `dist` folder in production.
3. Your entire app (frontend + backend) will be available at the Render URL.

## 4. Domain Connection (Optional)

1. Buy a domain from a registrar (e.g., Namecheap, Google Domains, GoDaddy).
2. In Render (or Vercel), go to your project's **Settings** -> **Custom Domains**.
3. Add your domain (e.g., `techyou.com`).
4. Follow the instructions to add the provided DNS records (A record or CNAME) to your domain registrar's DNS settings.
5. Wait for DNS propagation (can take up to 24 hours). Your site will then be live on your custom domain with automatic SSL.
