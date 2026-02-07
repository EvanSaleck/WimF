# Quick Start Guide

Get up and running with WimF in minutes!

## Prerequisites

- Docker installed on your system
- Docker Compose (included with Docker Desktop)

## Quick Start (Using the Starter Script)

The easiest way to get started is using the provided starter script:

```bash
./start.sh
```

Select an option:
- **Option 1**: Production mode (optimized builds)
- **Option 2**: Development mode (hot reload)
- **Option 3**: Stop all services
- **Option 4**: Clean up everything
- **Option 5**: View logs

## Quick Start (Manual)

### Production Mode

```bash
# Build and start all services
docker compose up --build

# Or in detached mode (background)
docker compose up -d
```

Access the application:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3000
- Database: localhost:5432

### Development Mode

For development with hot reload:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Access the application:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- Database: localhost:5432

## Testing the Setup

1. Open your browser to http://localhost:8080 (production) or http://localhost:5173 (development)
2. You should see the "What's in My Fridge?" application
3. Test the backend API:
   ```bash
   curl http://localhost:3000/api/health
   ```

## Common Commands

```bash
# Stop services
docker compose down

# View logs
docker compose logs -f

# Rebuild a specific service
docker compose build front
docker compose up -d front

# Remove everything (including volumes)
docker compose down -v
```

## Troubleshooting

### Port Already in Use

If you get a port conflict error:

```bash
# Check what's using the port
lsof -i :8080
lsof -i :3000
lsof -i :5432

# Kill the process or change ports in docker-compose.yml
```

### Database Connection Issues

If the backend can't connect to the database:

```bash
# Check database health
docker compose ps

# View database logs
docker compose logs db

# Restart the backend service
docker compose restart back
```

### Frontend Build Issues

If the frontend fails to build:

```bash
# Clear node_modules and rebuild
cd front
rm -rf node_modules package-lock.json
npm install
cd ..
docker compose build front
```

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Explore the API endpoints
- Customize the application for your needs
- Check individual service READMEs:
  - [Frontend README](front/README.md)
  - [Backend README](back/README.md)
