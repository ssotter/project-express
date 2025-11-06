# Project Express

A Node.js REST API built with Express.js, featuring user management and modern security practices.

## Features

- 🚀 Express.js REST API
- 👤 User Management (Create/List)
- 🔒 Security Headers with Helmet
- 🌐 CORS Enabled
- ✅ Input Validation with Zod
- 📝 Request Logging with Morgan
- ⚡ Hot Reload with Nodemon

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/ssotter/project-express.git

# Navigate to project directory
cd project-express

# Install dependencies
npm install
```

## Development

Start the development server with hot reload:

```bash
npm run dev
```

The server will start at `http://localhost:3000`

## API Endpoints

### Health Check
- `GET /api/health` - Check API status

### Users
- `GET /api/users` - List all users
- `POST /api/users` - Create a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

## Project Structure

```
project-express/
├── public/           # Static files
│   └── user-register.html
├── src/             # Source code
│   ├── app.js       # Express app setup
│   ├── server.js    # Server entry point
│   ├── controllers/ # Route controllers
│   ├── middlewares/ # Express middlewares
│   ├── routes/      # API routes
│   └── services/    # Business logic
└── package.json     # Project metadata and dependencies
```

## Dependencies

- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `helmet` - Security headers
- `morgan` - HTTP request logger
- `zod` - Schema validation
- `dotenv` - Environment variables

## Development Dependencies

- `nodemon` - Development auto-reload

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC License

## Author

Sergio Sotter (sergio.sotter@network-rg.com.br)