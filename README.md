
# Test Project

Welcome to Test Project, a Node.js application template with essential features for building robust backend APIs.


## Features

 - **Environment Configuration:** Manage sensitive information using .env files.
 - **Database Integration:** Easily connect to a database using connectDB.
 - **Security:** Includes helmet for setting HTTP headers and rateLimit for rate limiting.
 - **Static File Serving:** Serves files from the uploads directory.
 - **CORS Support:** Enables cross-origin resource sharing.
 - **Error Handling:** Centralized error handling middleware.



## 🛠️ Installation Instructions  

Follow these steps to set up the project locally:

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/MaulikPaghadal0603/Test.git
   cd Test-clone
   ```

2. **Install Dependencies:**  
   Make sure you have **Node.js** and **MongoDB** installed. Then run:  
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**  
   Create a `.env` file in the project root and add the following environment variables:  
   ```plaintext
   PORT=5000  
   MONGODB_URI=<your_mongo_database_uri>  
   JWT_SECRET=<your_jwt_secret_key>
   EMAIL_USER=<your_email>  
   EMAIL_PASS=<your_pass>  
   ```

4. **Run the Server:**  
   Start the backend server with Nodemon for live reloading:  
   ```bash
   npm start
   ```
   Your server should now be running at: [http://localhost:5000](http://localhost:5000).

## 🌐 Live Demo  

Check out the live version here: [Test Project](https://test-a85a.onrender.com)

## 🛠️ Technologies Used  

- **Backend:** Node.js, Express  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT, Bcrypt.js  
- **Environment Management:** Dotenv  
- **Utilities:** Cookie-Parser  
- **Development Tools:** Nodemon  

### Dependencies  

```json
{
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "express-rate-limit": "^7.4.1",
    "helmet": "^8.0.0",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.8.0",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.16",
    "nodemon": "^3.1.7"
}
