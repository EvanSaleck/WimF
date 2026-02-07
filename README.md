# WimF - What's in my fridge App

A full-stack application to track items in your fridge and reduce food waste.

## Project Structure

```
WimF/
├── front/          # Frontend (React + Vite + Tailwind + shadcn)
├── back/           # Backend (Express + Drizzle ORM)
├── docker-compose.yml
└── init.sql        # Database initialization
```

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library

### Backend
- **Express** - Web framework
- **Drizzle ORM** - TypeScript ORM
- **PostgreSQL** - Database

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Frontend web server and reverse proxy

## Getting Started

### Prerequisites
- Docker
- Docker Compose

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/EvanSaleck/WimF.git
cd WimF
```

2. Start all services:
```bash
docker compose up --build
```

3. Access the application:
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000
- **Database**: localhost:5432

### Development Mode

For local development without Docker:

#### Frontend
```bash
cd front
npm install
npm run dev
```
Access at http://localhost:5173

#### Backend
```bash
cd back
cp .env.example .env
npm install
npm run dev
```
Access at http://localhost:3000

#### Database
Make sure PostgreSQL is running and update the `.env` file with your database credentials.

## API Endpoints

### Health Check
- `GET /api/health` - Check if backend is running

### Items
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

## Docker Services

### Frontend Service
- **Port**: 8080
- **Technology**: Nginx serving built React app
- **Build**: Multi-stage build (Node.js → Nginx)

### Backend Service
- **Port**: 3000
- **Technology**: Node.js + Express
- **Database**: Connected to PostgreSQL

### Database Service
- **Port**: 5432
- **Technology**: PostgreSQL 16
- **Volume**: Persistent data storage

## Useful Commands

```bash
# Start all services
docker compose up

# Start in detached mode
docker compose up -d

# Rebuild containers
docker compose up --build

# Stop all services
docker compose down

# Stop and remove volumes
docker compose down -v

# View logs
docker compose logs -f

# View specific service logs
docker compose logs -f front
docker compose logs -f back
docker compose logs -f db
```

## Project Features

- ✅ Track fridge items
- ✅ Add, edit, delete items
- ✅ Set expiry dates
- ✅ Modern, responsive UI
- ✅ RESTful API
- ✅ Docker containerization
- ✅ Database persistence

## License

ISC

