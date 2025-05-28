# SimpleStore
A simple RESTful API built with Node.js and Express that supports user authentication, role-based authorization, and basic product management. All data is stored using JSON files, making this project ideal for educational purposes or small prototypes.

---

## 📁 Project Structure
```bash
SimpleStore/
├── app.js
├── data/
│ ├── users.json
│ └── products.json
├── middleware/
│ ├── authenticateJWT.js
│ └── authorizeRole.js
├── routes/
│ ├── auth.js
│ ├── users.js
│ └── product.js
├── utils/
│ ├── fileOperations.js
│ └── jwt.js
├── .env
└── package.json
```

## Installation

Clone the repository:
```bash
 git clone https://github.com/your-username/SimpleStore.git
```
Navigate into the project directory:
```bash
cd SimpleStore
```
Install the required dependencies:
```bash
npm install
```
Create a .env file in the root of the project and add the following configuration:
```bash
JWT_SECRET=your-jwt-secret
PORT=your-port-number
```
Start the server:
```bash
node app.js
```
## 🛠 Technologies Used
- Node.js
- Express
- JWT (jsonwebtoken)
- bcrypt
- dotenv

## 👤 Author
Created by Magdalena Sheroyan

🌐 GitHub: github.com/SheroyanMagdalena

    
