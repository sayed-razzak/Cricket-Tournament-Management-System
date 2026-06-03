🏏 AGCC26 - Cricket Tournament Management System

AGCC26 (Arati Gram Cricket Carnival 2026) is a full-stack web application built to manage a cricket tournament digitally. The platform provides a modern user interface for visitors and a powerful admin panel for tournament organizers to manage teams, fixtures, sponsors, organizers, and tournament-related information.

🌐 Live Demo

Frontend: https://cricket-tournament-management-syste-seven.vercel.app/

✨ Features

Public Website

- Tournament Home Page
- Teams Listing
- Team Details & Owner Information
- Organizers Section
- Sponsors Showcase
- Match Fixtures
- Points Table
- Mobile Responsive Design
- Fast Image Delivery via Cloudinary

Admin Panel

- Manage Teams
- Upload Team Logos
- Manage Team Owners
- Manage Organizers
- Upload Organizer Photos
- Manage Sponsors
- Manage Fixtures & Match Data
- Real-time Content Updates

🛠️ Tech Stack

Frontend

- React.js
- Tailwind CSS
- Axios
- React Router

Backend

- Django
- Django REST Framework

Database

- PostgreSQL (Render)

Media Storage

- Cloudinary

Deployment

- Frontend: Vercel
- Backend: Render
- Database: Render PostgreSQL

🏗️ Project Architecture

Frontend (React + Vercel)
↓
REST API
↓
Backend (Django + Render)
↓
PostgreSQL Database
↓
Cloudinary Media Storage

🚀 Installation

Clone Repository

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY

Backend Setup

cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

Frontend Setup

cd frontend

npm install

npm run dev

🔐 Environment Variables

Backend (.env)

SECRET_KEY=your_secret_key

DEBUG=False

DATABASE_URL=your_postgresql_database_url

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

📷 Media Handling

All uploaded images are stored securely using Cloudinary.

Examples:

- Team Logos
- Organizer Photos
- Sponsor Images
- Owner Photos

📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile Phones
- Tablets
- Laptops
- Desktop Screens

🎯 Learning Outcomes

This project helped me gain practical experience in:

- Full Stack Web Development
- React.js Development
- Django REST APIs
- PostgreSQL Database Management
- Cloudinary Integration
- Vercel Deployment
- Render Deployment
- Production Database Migration
- Real-world Project Maintenance

👨‍💻 Developer

Designed & Developed by Sayed Razzak

Portfolio:
https://www.sayedrazzak.in


---

⭐ If you found this project useful, consider giving it a star.
