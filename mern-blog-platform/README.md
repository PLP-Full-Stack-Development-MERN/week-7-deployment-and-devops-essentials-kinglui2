# MERN Blog Platform

## Project Overview
This project is a MERN stack application for a personal blog platform, allowing users to create, view, edit, and delete blog posts.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd mern-blog-platform
   ```
3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
5. Start the backend server:
   ```bash
   cd ../backend
   node index.js
   ```
6. Start the frontend application:
   ```bash
   cd ../frontend
   npm start
   ```

## API Endpoints
- **GET /posts**: Fetch all blog posts.
- **POST /posts**: Create a new blog post.
- **GET /posts/:id**: Fetch a single blog post by ID.
- **PUT /posts/:id**: Update an existing blog post by ID.
- **DELETE /posts/:id**: Delete a blog post by ID.
