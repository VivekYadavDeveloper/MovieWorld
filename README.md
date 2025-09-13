This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Movie World App

A web application for discovering movies and TV shows, built with Next.js and the The Movie Database (TMDB) API. Browse popular, top-rated, and upcoming content, search for your favorites, and view detailed information.

## Table of Contents

- About The Project
  - Built With
- Features
- Getting Started
  - Prerequisites
  - Installation
- Project Structure
- Deployment
- Contributing

## About The Project

This project is a modern, responsive web application that allows users to explore a vast database of movies and TV shows. It serves as a practical example of building a server-rendered application using the latest features of the Next.js App Router and consuming a third-party REST API.

### Built With

This project is built with the following technologies:

- Next.js - React framework for production.
- React - A JavaScript library for building user interfaces.
- TypeScript - Typed superset of JavaScript.
- Tailwind CSS - A utility-first CSS framework.
- The Movie Database (TMDB) API - Source for all movie and TV show data.

## Features

- Browse lists of popular, top-rated, and upcoming movies.
- Discover popular and top-rated TV shows.
- Search for movies and TV shows in real-time.
- View detailed information for each movie or TV show, including cast, crew, and similar titles.
- Responsive design for a seamless experience on desktop and mobile devices.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and a package manager (npm, yarn, pnpm, or bun) installed. You will also need an API key from The Movie Database (TMDB).

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/your_username/movie_world_app.git
    ```
2.  **Install packages**
    ```sh
    npm install
    ```
3.  **Set up environment variables**
    Create a `.env.local` file in the root of the project and add your TMDB API key:
    ```env
    API_KEY="YOUR_TMDB_API_KEY"
    ```
4.  **Run the development server**
    ```bash
    npm run dev
    ```

Open http://localhost:3000 with your browser to see the result.

## Project Structure

The project follows the standard Next.js App Router structure.

```
/app
├── (routes)                # Route groups for movies, tvshows, etc.
│   ├── [moviesId]
│   └── [tvshowId]
├── components/             # Reusable React components (e.g., Navbar, SearchBox)
├── layout.tsx              # Root layout for the application
└── page.tsx                # The home page of the application
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Here's how you can help:
