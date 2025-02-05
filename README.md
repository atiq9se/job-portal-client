# Job Portal

A modern job portal application that allows users to browse and apply for jobs, while providing an admin dashboard for managing job postings and user data.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **Job Portal** is a web application designed to connect job seekers with employers. It provides user authentication, job listing management, and an admin dashboard for administrative tasks.

## Features

- User authentication using **Firebase Auth** and **JWT**
- Job listings with search and filter functionality
- Apply for jobs directly through the platform
- **Admin dashboard** for managing job postings and users
- **State management** handled via **Context API**
- Database support for **MongoDB** and **Firebase**
- Deployed using **Vercel** for seamless hosting

## Technologies Used

- **Backend:** Node.js, Firebase
- **State Management:** Context API
- **Authentication:** Firebase Auth, JWT
- **Database:** MongoDB, Firebase
- **Deployment:** Vercel

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/job-portal.git
   cd job-portal

2. Install dependencies:
   npm install

3. Set up your environment variables in a .env file:
   MONGODB_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   JWT_SECRET=your_jwt_secret_key

4.Start the development server:
  npm run dev

Configuration

    Ensure you have Firebase configured for authentication.
    Update the .env file with your Firebase and MongoDB credentials.
    Modify settings in config.js as needed.

Usage

    Register or log in using Firebase authentication.
    Browse available job listings.
    Apply for jobs directly through the application.
    Admins can log in to access the admin dashboard to manage job postings and users.

Deployment

The project is deployed on Vercel. To deploy your own instance:

   1. Install Vercel CLI:
      npm install -g vercel

   2.Deploy:
    vercel

    
Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

  git checkout -b feature-name

3. Commit your changes:

  git commit -m "Add new feature"

4. Push to the branch:

    git push origin feature-name

5. Submit a pull request.

License

This project is currently not licensed.


