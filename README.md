# UFFSA Website

Official website for the University of Florida Filipino Student Association.

## 🏗️ Project Structure

```
├── frontend/          # React frontend application
├── backend/           # Express backend API
├── vercel.json        # Vercel deployment configuration
└── VERCEL_DEPLOYMENT.md  # Detailed deployment guide
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (Neon recommended)

### Local Development

**1. Install Dependencies**

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

**2. Configure Backend**

```bash
cd backend
cp .env.example .env
# Edit .env and add your DATABASE_URL
```

**3. Start Development Servers**

```bash
# Terminal 1 - Backend (from backend/)
npm run dev

# Terminal 2 - Frontend (from frontend/)
npm start
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📦 Tech Stack

### Frontend

- React 18
- Material-UI (MUI)
- React Router
- Typewriter Effect

### Backend

- Node.js + Express
- PostgreSQL (Neon)
- Drizzle ORM
- bcrypt for password hashing

## 🌐 Deployment

This project is configured for deployment on Vercel.

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for complete deployment instructions.

**Quick Deploy:**

```bash
npm install -g vercel
vercel
```

## 🔧 Available Scripts

### Frontend

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run vercel-build` - Build for Vercel deployment
- `npm test` - Run tests

### Backend

- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio (database GUI)
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🗂️ API Routes

Base URL (Production): `https://uffsa.net/api`
Base URL (Development): `http://localhost:5000/api`

### Endpoints

- `GET /` - Health check
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🔐 Environment Variables

### Backend

Create a `.env` file in the `backend/` directory:

```env
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend

Environment variables are auto-loaded:

- `.env.development` - Used during `npm start`
- `.env.production` - Used during `npm run build`

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is maintained by UF Filipino Student Association.

## 🔗 Links

- **Website**: [uffsa.net](https://uffsa.net)
- **Instagram**: [@uffsa](https://instagram.com/uffsa)

---

Built with ❤️ by UFFSA Web Team
