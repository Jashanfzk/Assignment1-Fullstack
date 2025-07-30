# JashTech Dashboard

A simple admin-only dashboard for managing products and services for a tech gadget store. Built with Node.js, Express, MongoDB Atlas, and Pug. Easily re-skin for any small business.

## Features

- Manage Products and Services (CRUD)
- Responsive Bootstrap UI with custom styles
- Server-side rendered admin pages (Pug)
- JSON API endpoints
- MongoDB Atlas integration

## Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Jashanfzk/Assignment1-Fullstack.git
   cd Assignment1-Fullstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file (see `.env.example`)**
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=3000
   ```

4. **Start the app**
   ```bash
   node app.js
   ```
   or for development with auto-reload:
   ```bash
   npx nodemon app.js
   ```

5. **Visit locally**
   ```
   http://localhost:3000
   ```

## API Endpoints

- `GET /api/products` — Returns a JSON array of products
- `GET /api/services` — Returns a JSON array of services

## Deployment

- Ready for Render, Railway, or other Node-friendly hosts
- App reads `PORT` from environment variables
- **Live demo:** [https://assignment1-fullstack-mdl7.onrender.com](https://assignment1-fullstack-mdl7.onrender.com)

---

Student project for HTTP5222 Assignment 1 — JashTech Dashboard

