# Backend - WimF

Express.js API with TypeScript, Drizzle ORM and PostgreSQL.

## Features

- 🚀 Express.js web framework
- 🗄️ Drizzle ORM for database operations
- 🐘 PostgreSQL database
- 🔄 RESTful API endpoints
- 🔷 TypeScript for type safety

## Setup

1. Copy environment file:
```bash
cp .env.example .env
```

2. Update `.env` with your database credentials

3. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
npm run dev
```

Access at http://localhost:3000

## Database

### Generate migrations
```bash
npm run db:generate
```

### Run migrations
```bash
npm run db:migrate
```

### Push schema directly (development)
```bash
npm run db:push
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

## Docker

### Development
```bash
docker build -f Dockerfile.dev -t wimf-backend-dev .
docker run -p 3000:3000 -v $(pwd):/app wimf-backend-dev
```

### Production
```bash
docker build -t wimf-backend .
docker run -p 3000:3000 wimf-backend
```
