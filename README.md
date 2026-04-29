# Real Estate App – Interview Task

This is a full‑stack real estate listing application built for the Junior Software Engineering interview task.  
It demonstrates **Next.js**, **Node.js + Express**, and **MongoDB** integration with functional search, property listing, and property details pages.

---

## Tech Stack

- **Frontend:** Next.js (App Router)  
- **Backend:** Node.js + Express  
- **Database:** MongoDB (local)

---

## Project Structure

```
interview-task1/
  backend/        # Express API + MongoDB models & routes
  frontend/       # Next.js UI (hero, search, listing, details)
  README.md
```

---

## Prerequisites

Make sure you have installed:

- Node.js (v18+ recommended)  
- npm  
- MongoDB installed locally (default port: 27017)

---

## Environment Variables

Create a `.env` file inside the **backend** folder:

```
MONGO_URI=mongodb://127.0.0.1:27017/properties
PORT=5000
```

---

## Backend Setup

Inside the project root:

```
cd backend
npm install
npm start
```

Backend runs at:
```
http://localhost:5000
```

### API Endpoints

- `GET /api/properties` – Fetch all properties  
- `GET /api/properties/:id` – Fetch a single property by ID  

---

## Frontend Setup

From the project root:

```
cd frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:3000
```

---

## Features Implemented

### Hero Section
- Background image  
- Title + description  
- Search bar (location / price text search)

### Search Functionality
Redirects to:
```
/properties/search?search=<query>
```

Filters properties by:
- Location  
- Price  
- Title  

### Properties Listing Page
- Grid layout  
- Fetches properties from backend API  
- Displays filtered results  

### Property Details Page
- Large hero image  
- Title, price, beds, baths, size  
- Description  
- Agent contact box  
- Similar properties section  

### Full‑Stack Concepts Demonstrated
- API connectivity (Next.js → Express → MongoDB)  
- State management (`useState`, `useEffect`, `useSearchParams`)  
- Database operations (MongoDB read operations)  
- Dynamic routing (`/properties/[id]`)  
- Clean folder structure  

---

## How to Run the Full App

### Start backend
```
cd backend
npm install
npm start
```

### Start frontend
```
cd frontend
npm install
npm run dev
```

### Open the app
```
http://localhost:3000
```

---

##  Notes

This project focuses on demonstrating:

- Full‑stack development  
- Clean architecture  
- Functional UI based on the provided design  
- Working search + property details  
- API + database integration  

---

## 📨 Author

**Harshana Madubhasha Jayawickrama**  
Junior Software Engineer