
## Project Overview


This project provides a simple backend solution to manage income and expenses. Each user has access to their own financial data, protected through JWT authentication.

## Technologies Used

Backend Framework: Node.js with Express.js
Database: MongoDB (NoSQL solution)
Authentication: JSON Web Tokens (JWT)

## Setup and Run Instructions
## Pre-requisites
Node.js (version 14+)

MongoDB (You can use MongoDB Atlas for a cloud solution)

Git

## Installing
git clone url

cd backend

## Install Dependencies:
npm install

## Setup Environment Variables
PORT=5001

MONGODB_URI=

## Run the Server:

nodemon server.js

## API Endpoints 

## User Authentication

## Register a New User

Endpoint: POST /api/user/register

![30eb7474-fcb4-48fd-9319-ca623c0ee28f](https://github.com/user-attachments/assets/082b92e4-4ed9-4e49-b8ac-dfe3549fd18f)

## Login User

Endpoint: POST /api/login

![67dd2228-37fb-4ab0-a2c9-ed2467c4e1d5](https://github.com/user-attachments/assets/320ee83d-cd33-4385-acfc-3c4376e72e18)

## Transactions
## Authorization: Bearer token required for all the APIS

## Add a New Transaction

Endpoint: POST /api/transactions

