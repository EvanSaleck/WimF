#!/usr/bin/env bash

# WimF Starter Script
# This script helps you get started with the WimF application

set -e

echo "🍕 Welcome to WimF - What's in my fridge App!"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

echo "✅ Docker and Docker Compose are installed"
echo ""

# Display menu
echo "Choose an option:"
echo "1) Production mode (Optimized builds)"
echo "2) Development mode (Hot reload enabled)"
echo "3) Stop all services"
echo "4) Clean up (Remove containers and volumes)"
echo "5) View logs"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo "🚀 Starting in production mode..."
        docker compose up --build -d
        echo ""
        echo "✅ Services started!"
        echo "   Frontend: http://localhost:8080"
        echo "   Backend API: http://localhost:3000"
        echo "   Database: localhost:5432"
        echo ""
        echo "View logs with: docker compose logs -f"
        ;;
    2)
        echo "🔧 Starting in development mode..."
        docker compose -f docker-compose.dev.yml up --build -d
        echo ""
        echo "✅ Services started!"
        echo "   Frontend: http://localhost:5173"
        echo "   Backend API: http://localhost:3000"
        echo "   Database: localhost:5432"
        echo ""
        echo "View logs with: docker compose -f docker-compose.dev.yml logs -f"
        ;;
    3)
        echo "🛑 Stopping all services..."
        docker compose down
        docker compose -f docker-compose.dev.yml down
        echo "✅ Services stopped!"
        ;;
    4)
        echo "🧹 Cleaning up..."
        read -p "This will remove all containers and volumes. Continue? (y/n): " confirm
        if [ "$confirm" = "y" ]; then
            docker compose down -v
            docker compose -f docker-compose.dev.yml down -v
            echo "✅ Cleanup complete!"
        else
            echo "Cancelled."
        fi
        ;;
    5)
        echo "📋 Viewing logs (Press Ctrl+C to exit)..."
        echo ""
        if docker ps | grep -q wimf; then
            if docker ps | grep -q wimf-backend-dev; then
                docker compose -f docker-compose.dev.yml logs -f
            else
                docker compose logs -f
            fi
        else
            echo "No services are running."
        fi
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac
