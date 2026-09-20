# 🚀 AI-Notes-Generator – AI Powered Exam Notes SaaS Platform

[![GitHub Repo URL](https://img.shields.io/badge/GitHub-SHAIKHANIF2004%2FAI--NOTES--GENERATOR-blue?style=flat&logo=github)](https://github.com/SHAIKHANIF2004/AI-NOTES-GENERATOR)
[![Technology Stack](https://img.shields.io/badge/Stack-MERN%20%2B%20AI%20%2B%20Stripe-brightgreen)]()
[![Live Application](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue)](https://ai-notes-generator-client.onrender.com)

A production-ready **AI-powered SaaS platform** that generates exam-oriented notes, diagrams, graphs, and revision material in just **ONE CLICK** using Artificial Intelligence.  

Built with the **MERN Stack**, integrated with **Gemini AI**, **Stripe payments**, and dual authentication using **JWT + Firebase**. Fully deployed on Render.

---

## ✨ Key Features

### 🎓 For Students

- **🤖 AI-Based Notes Generation** – Generate structured exam notes instantly.
- **📊 Auto-Generated Diagrams, Graphs & Charts** – Visual learning made simple.
- **📝 Revision Mode** – Short, crisp notes for last-minute preparation.
- **📚 Class-wise & Subject-wise Questions** – Important exam questions generated automatically.
- **📥 Downloadable Notes** – Export notes for offline study.
- **📱 Fully Responsive UI** – Optimized for desktop & mobile.

---

### 💳 SaaS & Monetization System

- **💰 Credit-Based Usage System** – Notes generation consumes credits.
- **💳 Stripe Payment Integration** – Secure credit purchase system.
- **📦 Pricing Plans** – Flexible plans for different usage levels.
- **🔄 Secure Webhook Handling** – Real-time credit updates after payment.

---

### 🔐 Authentication & Security

- **🔐 JWT Authentication** – Backend token-based authentication.
- **🔥 Firebase Authentication** – Secure client-side authentication.
- **🛡 Protected API Routes** – Token-based access control.
- **🌍 Live Deployment** – Hosted on Render.
- **⚙️ Environment-Based Configuration** – Secure production setup.

---

## 🛠️ Technology Stack

| Category          | Technology                         | Description                               |
| :---------------- | :--------------------------------- | :---------------------------------------- |
| **Frontend Core** | ⚛️ **React.js (Vite)**             | Fast, modern UI development               |
| **Backend Core**  | 🚀 **Node.js & Express.js**        | RESTful API & business logic              |
| **Database**      | 🗄️ **MongoDB & Mongoose**          | Data persistence                          |
| **AI Engine**     | 🤖 **Google Gemini AI**            | AI-powered notes generation               |
| **Payments**      | 💳 **Stripe**                      | Secure payment processing                 |
| **Authentication**| 🔐 **JWT + Firebase Auth**         | Secure authentication system              |
| **Deployment**    | 🌍 **Render**                      | Cloud hosting platform                    |

---

## 🚀 Quick Start Guide

### Prerequisites

- Node.js >= 16
- MongoDB
- Stripe Account
- Gemini API Key
- Firebase Project

---

### Installation

```bash
git clone https://github.com/SHAIKHANIF2004/AI-NOTES-GENERATOR.git
cd AI-NOTES-GENERATOR
```

```bash
# Install backend
npm install

# Install frontend
cd client && npm install && cd ..
```

---

### Run Development

```bash
# Start backend
npm run dev
```

```bash
# Start frontend
cd client && npm run dev
```

---

## 🌐 Live Application

🚀 Generate AI-powered exam notes instantly:

https://ai-notes-generator-client.onrender.com

---

## 🔧 Environment Variables

### Server (`.env`)

| Variable                | Description                       | Example Value                        |
| :---------------------- | :-------------------------------- | :----------------------------------- |
| `PORT`                  | Backend server port               | `8080`                               |
| `MONGO_URI`             | MongoDB connection string         | `mongodb://localhost:27017/ai-notes` |
| `JWT_SECRET`            | JWT secret key                    | `your_secure_jwt_secret`             |
| `GEMINI_API_KEY`        | Gemini API key                    | `your_gemini_api_key`                |
| `STRIPE_SECRET_KEY`     | Stripe secret key                 | `your_stripe_secret_key`             |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret             | `your_webhook_secret`                |
| `CLIENT_URL`            | Frontend base URL                 | `http://localhost:5173`              |

---

### Client (`client/.env`)

| Variable                    | Description            | Example Value              |
| :-------------------------- | :--------------------- | :------------------------- |
| `VITE_FIREBASE_API_KEY`     | Firebase API Key       | `your_firebase_api_key`    |

---

## 📚 API Overview

Base Route: `/api/v1`

**Public Endpoints**
- Register
- Login
- Pricing

**Protected Endpoints**
- Generate Notes
- Get User Credits
- Purchase Credits
- Download Notes
- Stripe Webhook

---

## 🧠 Why This Project Stands Out?

❌ Not a basic CRUD app  
❌ Not a dummy academic project  

✅ Real AI SaaS product  
✅ Stripe monetization system  
✅ Dual authentication (JWT + Firebase)  
✅ Production-level deployment  
✅ Resume-worthy full-stack architecture  

---

Built with ❤️ by **Abdul Hanif Shaik**

GitHub: https://github.com/SHAIKHANIF2004  
Live App: https://ai-notes-generator-client.onrender.com
