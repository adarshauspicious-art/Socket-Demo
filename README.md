# WebSocket Live Chat Application

A simple real-time chat application built using **Node.js** and **WebSockets (ws library)**. This project demonstrates persistent two-way communication between clients and a server without using traditional HTTP requests for messaging.

## Features

* Real-time messaging
* Multiple clients can connect simultaneously
* Persistent WebSocket connection
* Message broadcasting to all connected users
* Username support
* Lightweight and easy to understand

## Technologies Used

* HTML5
* JavaScript (Frontend)
* Node.js
* WebSocket (`ws` package)

## Project Structure

```
project/
│
├── client/
│   └── index.html
│
├── server/
│   └── server.js
│
├── package.json
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd webSocket
```

### 2. Install dependencies

```bash
npm install ws
```

## Running the Application

### Start the WebSocket Server

```bash
node server.js
```

You should see:

```bash
🚀 Server running on ws://localhost:8080
```

### Open the Client

Open `index.html` in your browser.

When prompted, enter your username.

## How It Works

1. The client establishes a WebSocket connection to:

```javascript
ws://localhost:8080
```

2. Users enter a message and click **Send**.

3. The client sends a JSON payload:

```json
{
  "type": "message",
  "name": "John",
  "message": "Hello everyone!"
}
```

4. The server receives the message and broadcasts it to all connected clients.

5. Every connected client receives and displays the message instantly.

## Example

User 1:

```
Hello everyone!
```

User 2 sees:

```
📩 John: Hello everyone!
```

## Future Improvements

* Private messaging
* Online user list
* Typing indicators
* Chat rooms
* Message timestamps
* Authentication and login system
* Message persistence with MongoDB
* Improved UI/UX

## Learning Objectives

This project helps understand:

* WebSocket protocol
* Real-time communication
* Client-server architecture
* Event-driven programming
* Broadcasting messages to multiple clients

## License

This project is open source and available under the MIT License.
