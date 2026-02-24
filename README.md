# Chat-Application
REAL-TIME CHAT APPLICATION

COMPANY: CODTECH IT SOLUTIONS
NAME: SEJAL SANJAY UMBARKAR
INTERN ID: CTIS4947
DOMAIN: FULL STACK WEB DEVELOPMENT
DURATION: 4 WEEKS
MENTOR: NEELA SANTOSH

TASK 2: REAL-TIME CHAT APPLICATION
PROJECT TITLE:

Real-Time Chat Application using Node.js, Express, and Socket.IO

DESCRIPTION OF THE TASK

As part of my internship with CODTECH IT SOLUTIONS under the Full Stack Web Development domain, I successfully completed Task 2: Real-Time Chat Application.

The goal of this project was to develop a real-time messaging platform that enables multiple users to communicate instantly using Socket.IO. The application allows users to send and receive messages without reloading the page, demonstrating the use of WebSockets for live, bidirectional data transfer between the client and server.

This project helped me understand how real-time applications are designed, how client-server communication works, and how events can be emitted and received simultaneously using Socket.IO. The chat interface was designed to resemble WhatsApp Web, with message bubbles, timestamps, and a modern responsive layout.

OBJECTIVES

To learn and implement real-time communication using Socket.IO.

To design a responsive chat UI similar to popular messaging apps.

To understand event-driven architecture in Node.js.

To manage multiple user connections and broadcast messages efficiently.

To handle system notifications like user join and leave events.

To develop a clean and maintainable code structure separating backend and frontend logic.

TECHNOLOGIES USED

HTML5 – Structuring the chat interface.

CSS3 – Designing and styling the chat layout (responsive design).

JavaScript (ES6) – Client-side event handling and DOM manipulation.

Node.js – Server-side environment for handling connections.

Express.js – Lightweight web framework to create the backend server.

Socket.IO – Enables real-time bidirectional communication between server and client.

CORS – Allows frontend and backend communication from different origins.

WORKFLOW / IMPLEMENTATION

Project Setup:
The project is divided into two folders — client (frontend) and server (backend).

The server uses Node.js with Express and Socket.IO to handle user connections and broadcast messages.

The client contains the HTML, CSS, and JavaScript files that display the chat UI and handle message events.

Server Implementation:

Set up an Express server on localhost:3000.

Initialized a Socket.IO instance to listen for client connections.

Implemented event listeners for join, send, and disconnect.

Used socket.broadcast.emit() to send messages to all users except the sender.

Client Implementation:

Connected to the server using io("http://localhost:3000").

Prompted the user to enter their username upon loading.

Displayed messages dynamically using JavaScript DOM manipulation.

Styled message bubbles for "me" (right side) and "others" (left side).

Added a modern empty chat screen with a “💬 No messages yet” placeholder.

Used event listeners for Enter key and send button.

Testing:

Opened two browser tabs to simulate two users.

Verified that sending a message in one tab appeared instantly in the other.

Checked that join and leave messages were broadcast correctly.

OUTPUT / RESULT

Successfully built and deployed a fully functional real-time chat app.

Messages are displayed instantly between all connected clients.

User-friendly and visually appealing interface with message alignment, timestamps, and responsive design.

Demonstrated practical understanding of WebSockets, event-based communication, and Node.js back-end handling.

LEARNING OUTCOMES

Gained practical experience in real-time web development using Socket.IO.

Understood how event-driven programming works in Node.js.

Learned to separate client-side and server-side responsibilities.

Strengthened understanding of CORS handling, frontend integration, and responsive UI design.

Enhanced teamwork and professional documentation skills during the internship project.

FUTURE ENHANCEMENTS

Add user authentication for private chats.

Store chat history using a database like MongoDB or Firebase.

Implement typing indicators and online/offline status.

Deploy the app online using Render (for backend) and Vercel (for frontend).

CONCLUSION

This project provided valuable hands-on experience in developing interactive, real-time applications. It not only strengthened my knowledge of full-stack web development but also gave me practical insight into real-time communication systems used in modern web platforms.

By completing this project under the mentorship of Neela Santosh, I enhanced my technical confidence in both backend and frontend development, effectively demonstrating how full-stack technologies work together to create powerful, engaging web applications.
