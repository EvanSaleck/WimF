# Frontend - WimF

React application with Vite, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡ Vite for fast development and builds
- 🎨 Tailwind CSS for styling
- 🧩 shadcn/ui component library
- 📱 Responsive design
- ⚛️ React 18

## Development

```bash
npm install
npm run dev
```

Access at http://localhost:5173

## Build

```bash
npm run build
```

Built files will be in the `dist` directory.

## Docker

### Development
```bash
docker build -f Dockerfile.dev -t wimf-frontend-dev .
docker run -p 5173:5173 -v $(pwd):/app wimf-frontend-dev
```

### Production
```bash
docker build -t wimf-frontend .
docker run -p 80:80 wimf-frontend
```

## Tech Stack

- React 18 with Vite
- Tailwind CSS for styling
- shadcn/ui components
- Nginx for production serving
