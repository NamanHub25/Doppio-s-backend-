# Chapter 1: Introduction to Backend Development

## Why do we need a Backend?

Imagine you open Instagram and click on the login button.

Within a few seconds:

* Your email and password are verified.
* Your profile is loaded.
* Your followers are fetched.
* Your messages are retrieved.
* Your home feed is generated.

The question is:

**Where does all this work happen?**

It doesn't happen inside the mobile app or the website you see. The frontend (UI) is only responsible for displaying information and collecting user input. The actual processing happens on another computer called a **server**.

The software running on that server is called the **backend**.

Without a backend, modern applications like Instagram, WhatsApp, Netflix, Amazon, Swiggy, or Doppio would simply be static websites with no real functionality.

---

# What is Backend Development?

Backend development is the process of building the server-side logic of an application.

It is responsible for receiving requests from users, processing those requests, interacting with databases or other services, applying business rules, and returning the appropriate response.

In simple words:

> The backend is the brain of an application.

While the frontend focuses on what users can see and interact with, the backend focuses on what happens behind the scenes.

---

# Responsibilities of a Backend

A backend commonly performs the following tasks:

* Authenticating users (Login and Signup)
* Storing and retrieving data from a database
* Processing business logic
* Validating user input
* Sending responses to the frontend
* Protecting sensitive information
* Managing authentication and authorization
* Communicating with external APIs and services

---

# Frontend vs Backend

Frontend is everything that the user can directly see and interact with.

Examples include:

* Buttons
* Forms
* Images
* Navigation bars
* Chat screens
* Profile pages

Backend is everything that happens behind the scenes.

Examples include:

* Checking whether a password is correct
* Saving a new user in the database
* Loading chat messages
* Creating JWT tokens
* Hashing passwords using bcrypt
* Fetching profile information

---

# Real Example (Doppio)

When a new user signs up on Doppio:

### Frontend Responsibilities

* Display the signup form.
* Collect user details.
* Send the entered information to the backend.

### Backend Responsibilities

* Receive the request.
* Validate the entered information.
* Check if the email already exists.
* Hash the password.
* Create a new user document.
* Store it inside MongoDB.
* Return a success response.

---

# Analogy

Think of a restaurant.

Frontend = Waiter

* Takes your order.
* Shows you the menu.
* Brings the food.

Backend = Kitchen

* Prepares the food.
* Checks ingredients.
* Cooks the meal.
* Sends it back to the waiter.

The customer only interacts with the waiter, but the real work happens inside the kitchen.

Similarly, users interact with the frontend, while the actual processing happens in the backend.

---

# Doppio Implementation

Throughout this project, the backend will be responsible for:

* User Signup
* User Login
* Password Hashing
* JWT Authentication
* User Profiles
* Messaging APIs
* Database Operations
* Authorization using Middleware

The frontend will only display the interface and send requests to the backend.

---

# Interview Perspective

### Q1. What is backend development?

Backend development is the process of building the server-side logic of an application. It handles requests, processes business logic, communicates with databases, and sends responses back to the client.

### Q2. What is the difference between frontend and backend?

Frontend is responsible for the user interface, while the backend is responsible for processing data, implementing business logic, authentication, database communication, and returning responses.

---

# Key Takeaways

* Backend is the brain of an application.
* It runs on a server.
* Users never directly interact with the backend.
* Frontend and backend communicate using APIs.
* The backend manages databases, authentication, business logic, and security.

---

# Common Beginner Mistakes

* Thinking the backend is only a database.
* Confusing the server with the backend application.
* Believing the frontend can securely store sensitive information.
* Assuming the backend is visible to users like the frontend.

---

# Chapter 2: Client vs Server

## Why do we need to understand Client and Server?

Every web application, whether it is Instagram, WhatsApp, Netflix, Amazon, or Doppio, follows the Client-Server Architecture.

Understanding this architecture is one of the most fundamental concepts in backend development because almost every request on the internet follows this model.

Without understanding Client and Server, concepts like APIs, HTTP, Authentication, Databases, and JWT become difficult to understand.

---

# What is a Client?

A client is any device or application that requests a service from another computer.

Simply put:

> A client asks for something.

Examples of clients include:

* A web browser like Chrome or Edge
* A mobile application like Instagram
* Postman
* A desktop application

Whenever a client needs information, it sends a request to the server.

---

# What is a Server?

A server is a computer (or software running on a computer) that receives requests from clients, processes them, and sends back an appropriate response.

Simply put:

> A server provides the requested service.

A server may:

* Verify login credentials
* Store user data
* Retrieve chat messages
* Send profile information
* Connect to databases
* Communicate with other services

---

# How do Client and Server Communicate?

The communication follows a Request-Response cycle.

Step 1:
The client sends a request.

↓

Step 2:
The server receives the request.

↓

Step 3:
The server processes the request.

↓

Step 4:
The server sends a response.

↓

Step 5:
The client displays the result to the user.

This cycle repeats every time a user interacts with the application.

---

# Example: Doppio Login

Suppose a user enters:

Email:
[naman@gmail.com](mailto:naman@gmail.com)

Password:
password123

### Step 1: Client

The frontend collects the email and password.

The browser sends:

POST /api/v1/auth/login

along with the email and password.

---

### Step 2: Server

The backend receives the request.

The login controller:

* Finds the user in MongoDB.
* Compares the password using bcrypt.
* Generates a JWT if the credentials are correct.

---

### Step 3: Response

The backend returns:

Status Code: 200

Response:

{
"success": true,
"token": "JWT_TOKEN"
}

---

### Step 4: Client

The frontend receives the token and stores it.

Now the user is considered logged in.

---

# Another Example: Viewing Messages

The user opens the Messages page.

Client:

GET /api/v1/messages

↓

Server:

* Verifies JWT.
* Finds all messages belonging to the logged-in user.
* Retrieves them from MongoDB.

↓

Response:

Returns a list of messages.

↓

Client:

Displays the chat screen.

---

# Real-Life Analogy

Imagine ordering coffee at a café.

Customer = Client

The customer places an order.

↓

Barista = Server

The barista prepares the coffee.

↓

Coffee = Response

The customer receives the prepared coffee.

The customer never enters the kitchen to prepare the coffee.

Similarly, a client never directly accesses the database. Every request goes through the server.

---

# Common Clients

Examples include:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Postman
* React Applications
* Android Apps
* iOS Apps

---

# Common Servers

Examples include:

* Express.js
* Node.js
* Django
* Spring Boot
* Laravel
* ASP.NET

These frameworks help developers build servers that can receive and respond to client requests.

---

# Doppio Implementation

Client:

The React frontend (which we'll build next) will:

* Show Login and Signup pages.
* Collect user input.
* Send API requests.

Server:

The Express backend will:

* Validate user data.
* Connect to MongoDB.
* Authenticate users.
* Generate JWTs.
* Return responses.

Neither the React frontend nor the user will communicate directly with MongoDB.

All communication must pass through the backend server.

---

# Interview Perspective

### Q1. What is a client?

A client is any application or device that sends requests to a server in order to access a service or retrieve data.

### Q2. What is a server?

A server is a computer or software that receives client requests, processes them, performs the required operations, and returns an appropriate response.

### Q3. Can a frontend communicate directly with MongoDB?

No.

Doing so would expose database credentials and allow anyone to access or modify the database. Instead, the frontend communicates with the backend, and the backend securely interacts with the database.

---

# Key Takeaways

* A client requests services.
* A server provides services.
* Communication follows the Request-Response model.
* The frontend acts as the client.
* The backend acts as the server.
* Databases should only be accessed through the backend.

---

# Common Beginner Mistakes

* Thinking the client and frontend are always the same thing. (Postman is also a client.)
* Thinking Node.js itself is the server. Node.js is the runtime; your Express application runs on it to behave as a server.
* Trying to connect the frontend directly to the database.
* Assuming the server remembers every client automatically. HTTP is stateless, which is why mechanisms like JWT are needed for authentication.

