# Tech Gadget Store Admin Dashboard

A simple admin-only dashboard for managing products and services for a tech gadget store. Built with Node.js, Express, MongoDB Atlas, and Pug. Easily re-skin for any small business.

## Features
- Manage Products and Services (CRUD)
- Responsive Bootstrap UI with custom styles
- Server-side rendered admin pages (Pug)
- JSON API endpoints
- MongoDB Atlas integration
- Sample data seeding script

## Setup

1. **Clone the repo**
2. **Install dependencies**
   ```
   npm install
   ```
3. **Create a `.env` file** (see `.env.example`):
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=3000
   ```
4. **Seed the database with sample data** (optional but recommended):
   ```
   node seed.js
   ```
5. **Start the app**
   ```
   node app.js
   ```
   or for development with auto-reload:
   ```
   npx nodemon app.js
   ```
6. **Visit** [http://localhost:3000](http://localhost:3000)

## API Endpoints
- `GET /api/products` — JSON array of products
- `GET /api/services` — JSON array of services

## Deployment
- Ready for Render/Railway/other Node-friendly hosts
- App reads `PORT` from env
- Replace the deployment link below after deploying:

**Live demo:** [https://your-deployment-link](https://your-deployment-link)

---

*Student project for HTTP5222 Assignment 1* 