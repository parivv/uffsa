# UFFSA Backend

Backend API for the UF Filipino Student Association website.

## Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **PostgreSQL** - Database (hosted on Neon)
- **Drizzle ORM** - Type-safe ORM

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

3. Add your Neon database connection string to `.env`

4. Push the database schema:

   ```bash
   npm run db:push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `npm run db:generate` - Generate migrations
- `npm run db:migrate` - Run migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio (database GUI)

## API Endpoints

- `GET /` - Health check
- `GET /api/users` - Get all users (example endpoint)
