
## Project Overview


This project provides a simple backend solution to manage income and expenses, built using the MVC " (Model-View-Controller) " architecture. Each user has access to their own financial data, protected through JWT authentication. The architecture separates the concerns of the application, ensuring a clean structure with models for data handling, controllers for business logic, and routes for API endpoints.

## Technologies Used

Backend Framework: Node.js with Express.js
Database: MongoDB (NoSQL solution)
Authentication: JSON Web Tokens (JWT)

## Setup and Run Instructions
## Pre-requisites
Node.js 

MongoDB (You can use MongoDB Atlas for a cloud solution)

Git

## Installing
git clone url

cd backend

## Install Dependencies:
npm install

## Setup Environment Variables
PORT=5000

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

![42950729-5d99-42bc-b9f8-896d39c01101](https://github.com/user-attachments/assets/44a9dbb0-797a-41f2-8f3c-cc26ddb6825c)




## Categories
## Authorization: Bearer token required for all the APIS

## Add a New Category
Endpoint: POST /api/categories



![0c8c9ddc-e4a6-4098-919f-8738f1cefb6e](https://github.com/user-attachments/assets/cb77a31f-15e3-4b0a-8f8d-1ac43167d097)


## Get All Categories
Endpoint: GET /api/categories 


![91a6d39f-f17b-4b86-a2a6-8fdfc14bdf3b](https://github.com/user-attachments/assets/cd3dcd4f-f8bb-4d9a-a2cc-a3a84adb560e)





## Transactions
## Authorization: Bearer token required for all the APIS

## Add a New Transaction

Endpoint: POST /api/transactions
![d376a521-9380-4e2d-a9fa-8a0330ef3055](https://github.com/user-attachments/assets/69383000-e76d-46d6-a2b5-4113e001b575)

## Get All Transactions 
Endpoint: GET /api/transactions
![16adf892-4e9d-4ce0-88b1-6463703ac7ce](https://github.com/user-attachments/assets/92185a4c-5be8-4e90-8a8c-43bf44513e7a)

## Get Specific Transaction
Endpoint: GET /api/transactions/:id


![6fb95905-ba1d-4cea-a4f1-617d3704a3d6](https://github.com/user-attachments/assets/a96ea01f-2b3c-426d-8f41-c4dbf27ae969)

## Update a Transaction
Endpoint: PUT /api/transactions/:id

![c2d6713d-cf59-4bf5-80b9-77ba8f4d2a3f](https://github.com/user-attachments/assets/86810da0-44f1-4085-8061-990196a13b13)


## Delete a Transaction
Endpoint: DELETE /api/transactions/:id


![faad28bd-85ca-4509-859d-a891eac27f98](https://github.com/user-attachments/assets/26e5059e-c352-42fb-8ffb-3425c202318d)







