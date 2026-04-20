# NextFrame Website Implementation Plan (Full-stack)

This document outlines the detailed plan to construct the NextFrame website, with a clear separation of Frontend and Backend as requested, bilingual support, and dynamic portfolio functionality based on a local folder.

## Goal Description
Create a premium, bilingual (Arabic/English) website for "NextFrame". The project will be divided into a backend (Node.js/Express) and frontend (React via Vite) to ensure a professional, scalable architecture. The color scheme will rely on the provided Logo (Cyan/Teal/Light Blue gradient). 

## Architecture & Proposed Structure

### 1. Backend (`/backend`)
A Node.js & Express server designed specifically to handle dynamic requests.
- **API Endpoint:** `/api/portfolio` - This endpoint will scan a specific `portfolio_images` folder and return the list of image files to the frontend automatically.
- **Folder:** A dedicated `portfolio_images` folder where you can drop images anytime, and they will automatically appear on the site.

### 2. Frontend (`/frontend`)
A modern React application (using Vite) featuring sleek dark mode, scroll animations, and dynamic interactions.
- **Language Switcher:** A button in the navbar to toggle between Arabic and English seamlessly without reloading the page (using React Context or a simpler state).
- **Hero Section:** High-impact design featuring the new Logo and a CTA.
- **Services Section:** Dynamic grid layout for all 6 services with hover effects (Graphic, Video Shooting, Video Editing, Content Creation, Media Buying, Web Dev).
- **Portfolio Section:** Automatically fetches images from the backend API.
- **Contact Section:** Links to Instagram, Facebook, Email, and WhatsApp number (+201097863929).

## File & Folder Setup

### Backend (Node.js/Express)
[NEW] `backend/server.js` (Main server file)
[NEW] `backend/package.json`
[NEW] `backend/portfolio_images/` (Folder to drop your images into)

### Frontend (React / Vite)
[NEW] `frontend/src/App.jsx`
[NEW] `frontend/src/index.css` (Premium styles, variables for Teal/Cyan gradients matching the Logo)
[NEW] `frontend/src/assets/logo.png` (The provided Logo)
[NEW] `frontend/src/i18n/` (JSON files for Arabic and English translations)

## User Review Required

> [!IMPORTANT]  
> The plan has been updated to reflect:
> 1. Complete separation of Backend and Frontend.
> 2. Bilingual setup (Arabic/English).
> 3. Dedicated folder for automatic portfolio image syncing.
> 4. Integrating your logo's Teal/Cyan theme.

## Open Questions

> [!TIP]  
> No further questions for now. If you approve this plan, I'll start building the Backend and Frontend folders in `d:\programming\nextframe` directly.

## Verification Plan
1. I will initialize the backend, write the API route to read the folder, and start the server.
2. I will initialize the frontend, build the UI (Dark mode + Teal gradients + Bilingual config), and link it to the backend API.
3. Once completed, I will instruct you on how to start both servers locally to preview the result.
