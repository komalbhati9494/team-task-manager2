# 🚀 Team Task Manager (Full-Stack Project)

## 📌 Overview

This is a full-stack web application where users can:

* Create and manage projects
* Assign tasks to team members
* Track progress with role-based access (Admin / Member)

---

## ✨ Features

* 🔐 User Authentication (Signup/Login)
* 📁 Project Management
* ✅ Task Assignment & Tracking
* 👥 Role-Based Access Control
* 🌐 REST APIs

---

## 🛠️ Tech Stack

**Frontend:**

* React.js (if used)

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB

---

## 📂 Project Structure

```
team-task-manager/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── package.json
│
└── frontend/ (if applicable)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

---

### 3️⃣ Run Backend Server

```
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints (Sample)

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user
* `POST /api/projects` → Create project
* `GET /api/projects` → Get all projects
* `POST /api/tasks` → Create task

---


## 📌 Future Improvements

* UI Enhancements
* Real-time updates (WebSockets)
* Notifications system

---

## 👩‍💻 Author

* komal bhati

---

## ⭐ Note

This project was built as part of a technical assessment and demonstrates full-stack development skills.
