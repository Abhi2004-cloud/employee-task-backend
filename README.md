
---

# ✅ **README.md — BACKEND (Node.js + Express + MongoDB)**  

---

```md ```
# Employee & Task Management API (Backend)

A simple and clean **Node.js + Express + MongoDB** backend for managing Employees and Tasks.  
Supports full CRUD operations with proper validation and RESTful routing.

---

## 🚀 Features

### 👨‍💼 Employee API
- Create Employee  
- Get all Employees  
- Update Employee  
- Delete Employee  

### 📝 Task API
- Create Task  
- Get all Tasks  
- Update Task  
- Delete Task  
- Link tasks to employees via employeeId  

### 🗂️ Database
- MongoDB with Mongoose models  
- Separate models for Employees and Tasks  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- CORS  
- dotenv  

---

## 📁 Project Structure

backend/
├── models/
│ ├── Employee.js
│ └── Task.js
├── routes/
│ ├── employeeRoutes.js
│ └── taskRoutes.js
├── server.js
├── .env (not included)
└── package.json



---

## ▶️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Abhi2004-cloud/employee-task-backend.git
cd employee-task-backend
```

Install Dependencies - npm install
Add Environment Variables - MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the server - npm run start

Deployment Note

This backend does not include UI, so it is not deployed on Vercel.

