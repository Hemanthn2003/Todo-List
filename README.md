🚀 Full Stack Todo App (React + JSON Server + Render)
<div align="center"> <br /> <img src="./banner.png" alt="Todo App Banner"> <br /> <div> <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/-JSON--Server-000000?style=for-the-badge&logo=json&logoColor=white" /> <img src="https://img.shields.io/badge/-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" /> <img src="https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=vercel" /> </div> <h3 align="center">A Full Stack Todo Application with Live API, Search, CRUD Operations & Deployment</h3> </div>
📋 Table of Contents
Introduction
Tech Stack
Features
Project Flow
Quick Start
API Setup
Deployment
Screenshots
🚀 Introduction

This is a Full Stack Todo List Application built using React + Vite for the frontend and JSON Server as a backend API.

The project demonstrates:

Real-time CRUD operations
API integration
Deployment using Render & Vercel
Clean component-based architecture
⚙️ Tech Stack
Frontend
React – UI development
Vite – Fast build tool
CSS – Styling
Backend
JSON Server – Fake REST API
db.json – Database
Deployment
Render – Backend hosting
Vercel – Frontend hosting
⚡ Features
✅ Add new todo items
✅ Delete items
✅ Mark as completed
✅ Search functionality
✅ Live API integration
✅ Responsive UI
✅ Full CRUD operations
🔄 Project Flow
User Action
   ↓
React Frontend (Vercel)
   ↓
Fetch API Calls
   ↓
Render Backend (json-server)
   ↓
db.json (Database)
   ↓
Response → UI Update
🧠 Application Execution Flow
index.html
   ↓
main.jsx
   ↓
App.jsx
   ↓
Components
   ├── Header
   ├── AddItems
   ├── SearchItem
   ├── Content
   ├── Footer
🧩 Component Breakdown
App.jsx
Main controller
Handles:
API calls
State management
CRUD operations
AddItems.jsx
Adds new todo item
SearchItem.jsx
Filters items
Content.jsx
Displays list
LineItem.jsx
Individual item UI
🔌 API Setup
Local Development
npx json-server --watch db.json --port 3500
Production API
https://todo-backend-1-yuga.onrender.com/items
👌 Quick Start
Prerequisites
Node.js
Git
Clone Project
git clone https://github.com/yourusername/todo-app.git
cd todo-app
npm install
npm run dev
☁️ Deployment
Backend (Render)
Create new Web Service
Add this script in package.json
"start": "json-server --watch db.json --host 0.0.0.0 --port $PORT"
Deploy
Frontend (Vercel)
Push code to GitHub
Import in Vercel
Deploy
🖼️ Screenshots

Add your app screenshots here

Todo List UI
Add Item
Search Feature
⚠️ Important Notes
Render free tier sleeps after inactivity
First API request may take 30–50 seconds
🚀 Future Improvements
🔐 Authentication system
🛒 Convert into e-commerce cart
☁️ MongoDB integration
⚡ Performance optimization
💡 Project Summary

This project demonstrates:

Full stack development basics
API handling in React
Deployment workflows
Real-world CRUD functionality
🔗 Useful Links
React Docs: https://react.dev
Vite Docs: https://vitejs.dev
JSON Server: https://github.com/typicode/json-server
Render: https://render.com
Vercel: https://vercel.com
⭐ Support

If you like this project:

⭐ Star the repo
🍴 Fork it
📢 Share it
👨‍💻 Author

Hemanth N

💥 Want next level?

If you want, I can upgrade this README to:

🔥 Portfolio-style (like top GitHub profiles)
🎨 With animations + GIF preview
📊 With project stats & badges

Just tell me 👍
