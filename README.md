# Weatherly — Weather Dashboard

A responsive full-stack weather dashboard built during the **CodeOrbit Tech Frontend Development Internship** and extended into a production-deployed web application.

Weatherly allows users to search for cities, view current weather conditions and atmospheric information, explore weather data on a map, and manage personalized dashboard settings with persistent PostgreSQL storage.

## Live Demo

**Live Application:** https://weatherlyclient.netlify.app

**GitHub Repository:** https://github.com/kamaleshs-codes/weather-dashboard

## Features

* Search weather information by city
* Dynamic city-based weather data
* Current temperature and weather conditions
* Weather icons and detailed atmospheric information
* Air-quality information
* Weather map with location-based weather data
* Sunrise and sunset information
* Responsive dashboard layout
* Light and dark theme support
* Customizable weather and dashboard settings
* Weather alert and daily-summary preferences
* Auto-refresh settings
* Default location configuration
* Persistent user settings
* REST API communication between frontend and backend
* PostgreSQL database integration
* Production deployment

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* Axios
* React Router
* OpenWeather API

### Backend

* Node.js
* Express.js
* PostgreSQL
* `pg`
* REST API

### Database

* PostgreSQL
* Supabase

### Deployment

* Netlify — Frontend
* Render — Backend API
* Supabase — PostgreSQL Database

## Application Architecture

```text
                    ┌─────────────────────┐
                    │    Weatherly UI     │
                    │   React + Vite      │
                    │   Tailwind CSS      │
                    └──────────┬──────────┘
                               │
                    Axios / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express Backend   │
                    │   Node.js + Express │
                    │      Render         │
                    └───────┬─────┬───────┘
                            │     │
              ┌─────────────┘     └──────────────┐
              ▼                                  ▼
    ┌──────────────────┐               ┌──────────────────┐
    │ OpenWeather API  │               │ PostgreSQL       │
    │ Weather Data     │               │ Supabase         │
    └──────────────────┘               └──────────────────┘
```

## Project Structure

```text
weather-dashboard/
│
├── client/
│   ├── public/
│   │   └── _redirects
│   │
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── routes/
│   ├── db.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git
* PostgreSQL-compatible database
* OpenWeather API key

### 1. Clone the repository

```bash
git clone https://github.com/kamaleshs-codes/weather-dashboard.git
```

```bash
cd weather-dashboard
```

### 2. Set up the frontend

```bash
cd client
npm install
```

Create a `.env` file inside the `client` directory:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_BACKEND_API_URL=http://localhost:5000/api
```

Then start the frontend:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

### 3. Set up the backend

Open another terminal:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
```

Start the backend:

```bash
npm start
```

The backend will normally run at:

```text
http://localhost:5000
```

## Environment Variables

### Frontend

The frontend requires:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_BACKEND_API_URL=http://localhost:5000/api
```

### Backend

The backend requires:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
```

> Never commit `.env` files, API keys, database passwords, or database connection strings to GitHub.

## Database

Weatherly uses **PostgreSQL through Supabase** for persistent dashboard settings.

The backend provides API endpoints for reading and updating settings.

Example endpoints:

```text
GET /api/settings
PUT /api/settings
GET /api/db-test
```

The settings include:

* Temperature unit
* Wind-speed unit
* Theme
* Weather alerts
* Daily summary
* Auto refresh
* Default map layer
* Default location

## Production Deployment

The application is deployed using a three-part architecture:

```text
Frontend
Netlify
   │
   ▼
Backend API
Render
   │
   ▼
PostgreSQL
Supabase
```

### Frontend

The React/Vite frontend is deployed on Netlify.

```text
https://weatherlyclient.netlify.app
```

### Backend

The Express API is deployed on Render.

The production frontend communicates with the Render API through:

```env
VITE_BACKEND_API_URL=https://your-render-backend.onrender.com/api
```

### Database

The production backend connects to PostgreSQL hosted by Supabase.

The database connection string is stored securely as a backend environment variable and is never exposed to the frontend.

## Production Verification

The production application has been tested through the complete request flow:

```text
React Frontend
      ↓
Netlify
      ↓
Render Express API
      ↓
Supabase PostgreSQL
```

Settings changes are successfully:

* Sent from the deployed frontend
* Processed by the deployed Express API
* Stored in PostgreSQL
* Retrieved after page refresh

## Build

To create a production build:

```bash
cd client
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Internship Context

This project was originally developed as part of the **CodeOrbit Tech Frontend Development Internship**.

The initial internship task focused on building a weather dashboard interface with:

* City search
* Temperature display
* Weather conditions
* Weather icons
* Responsive dashboard UI

The project was subsequently extended beyond the initial frontend requirement with:

* Express.js backend
* REST API architecture
* PostgreSQL database integration
* Supabase deployment
* Persistent dashboard settings
* Production frontend and backend deployment
* Full frontend → backend → database integration

## Author

**Kamalesh S**

GitHub: https://github.com/kamaleshs-codes

LinkedIn: https://www.linkedin.com/in/kamalesh-s2004
