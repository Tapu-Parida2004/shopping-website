# Shopping Website - React + Fake Store API

A modern e-commerce web application built with React, React Router, and the Fake Store API. This project demonstrates key front-end development skills including API integration, state management, and responsive design.

## Features

- **User Authentication**

  - Login page with JWT token storage
  - Protected routes for authenticated users
  - Logout functionality

- **Product Browsing**

  - Product listing with responsive grid layout
  - Category filtering
  - Search functionality
  - Product detail pages

- **Shopping Cart**

  - Add/remove items
  - Quantity adjustment
  - Cart persistence
  - Checkout process

- **Responsive Design**
  - Mobile-first approach
  - Fully responsive across all device sizes
  - Accessible UI components

## Technologies Used

- **Frontend**

  - React.js (Vite)
  - React Router v6
  - Context API (State Management)
  - Axios (HTTP Client)

- **Styling**

  - Plain CSS (No CSS frameworks)
  - CSS Variables
  - Responsive design principles
  - Modern UI/UX patterns

- **API**
  - [Fake Store API](https://fakestoreapi.com)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tapu-Parida2004/shopping-website.git
   ```
2. Navigate to the project directory:

   ```bash
   cd shopping-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit:

   ```bash
   http://localhost:5173
   ```

## Project Structure

- **src/**
- **├── components/       # Reusable components**
- **├── pages/            # Page components**
- **├── context/          # Context providers**
- **├── styles/           # CSS files**
- **├── App.jsx           # Main application component**
- **└── main.jsx          # Application entry point**

## Available Scripts
- npm run dev: Starts the development server

- npm run build: Builds the app for production

- npm run preview: Previews the production build

- npm run lint: Runs ESLint

## API Usage
This project uses the Fake Store API with the following endpoints:

# Authentication

- POST /auth/login

# Products

- GET /products
 
- GET /products/:id
 
- GET /products/categories

- GET /products/category/:category

##  Deployment
The project is deployed on Vercel. You can deploy your own version:

1. Create a Vercel account

2. Connect your GitHub repository

3. Configure build settings (Vite projects require no special configuration)

4. Deploy!

## Testing Credentials
Use these test credentials to login:

- Username: mor_2314

- Password: 83r5^_

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the project

2. Create your feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some AmazingFeature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

## Contact
Tapu Parida 
Project Link: https://github.com/Tapu-Parida2004/shopping-website