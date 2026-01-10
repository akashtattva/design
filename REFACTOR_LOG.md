# Refactor Log: Migration to Vite + React Architecture
**Date:** 10 January 2026

## Overview
This session focused on refactoring a monolithic "single-file" HTML/JS portfolio into a modern, scalable **React** application powered by **Vite**. This transition improves performance, maintainability, and developer experience.

## Key Changes

### 1. Architecture Migration
*   **From:** A single `index.html` file containing all markup, styles (Tailwind CDN), and logic (React/Babel CDN).
*   **To:** A modular **Vite** project structure.
    *   **Build Tool:** Vite (for instant HMR and optimized production bundling).
    *   **Framework:** React 18 (Standard imports instead of global UMD builds).
    *   **Styling:** Tailwind CSS (PostCSS build process instead of CDN).

### 2. Directory Structure Created
```text
C:\portfolio\
├── public/                 # Static assets
│   └── fonts/              # Migrated font files (DepartureMono, ChakraPetch, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Scene.jsx       # Three.js 3D background
│   │   ├── Nav.jsx         # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Projects.jsx    # Project gallery
│   │   └── ... (Contact, Experience, etc.)
│   ├── styles/
│   │   └── globals.css     # Global styles & Tailwind directives
│   ├── App.jsx             # Main layout
│   └── main.jsx            # Entry point
├── index.html              # Clean entry HTML linking to src/main.jsx
└── vite.config.js          # Vite configuration
```

### 3. Component Refactoring
The original monolithic code was broken down into functional React components:
*   **`Scene.jsx`**: Encapsulates the Three.js logic and GSAP scroll timeline.
*   **`CustomCursor.jsx`**: Handles the custom mouse follower logic.
*   **`MagneticNavItem.jsx`**: Reusable component for the magnetic hover effect.
*   **`ProjectDisclosure.jsx`**: Handles the accordion logic for the "Selected Works" section.

### 4. Asset Management
*   Moved all local font files (`DepartureMono`, `Chakra Petch`, `Helvetica Neue`) from the root directory to `public/fonts/`.
*   Updated `@font-face` definitions in `src/styles/globals.css` to point to the new paths.

### 5. Dependency Installation
Replaced CDN links with local NPM packages:
*   `react`, `react-dom`
*   `three` (Three.js)
*   `gsap` (GreenSock Animation Platform)
*   `tailwindcss`, `postcss`, `autoprefixer`

## How to Run
1.  **Start Development Server:**
    ```bash
    npm run dev
    ```
    Access at: `http://localhost:5173`

2.  **Build for Production:**
    ```bash
    npm run build
    ```
    Creates an optimized `dist/` folder.

## Future Recommendations
*   **Performance:** The Three.js scene is now tree-shaken, but further optimizations (like using `react-three-fiber`) could be explored in the future for even better React integration.
*   **Linting:** ESLint is configured; run `npm run lint` to check code quality.
