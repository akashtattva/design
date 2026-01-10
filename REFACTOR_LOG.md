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

### 5. Font Classes Reference
The following Tailwind CSS font classes are available for use throughout the application. All fonts are defined in `src/styles/globals.css` and configured in `tailwind.config.js`:

**Available Font Classes:**
*   `font-sans` - Uses **Helvetica Neue** (fallback: Helvetica, Arial, sans-serif)
*   `font-mono` - Uses **Roboto Mono** (fallback: monospace)
*   `font-departure` - Uses **DepartureMono** (fallback: Roboto Mono, monospace)
*   `font-chakra` - Uses **ChakraPetch** (fallback: Helvetica Neue, system-ui, sans-serif)
*   `font-helvetica` - Uses **Helvetica Neue** (fallback: Helvetica, Arial, sans-serif)

**Font Files:**
*   `RobotoMono-Regular.ttf` → `font-mono`
*   `DepartureMono-Regular` (woff2, woff, otf) → `font-departure`
*   `ChakraPetch-Regular.ttf` → `font-chakra`
*   `HelveticaNeue-Regular.otf` → `font-sans`, `font-helvetica`

**Note:** Only Regular (400 weight) font variants are loaded. Use Tailwind's font-weight utilities (`font-normal`, `font-medium`, `font-bold`, etc.) for weight variations, which will use browser-synthesized weights.

### 6. Spacing Classes Reference
Consistent vertical spacing between sections is managed through CSS variables and Tailwind utility classes defined in `src/styles/globals.css` and `tailwind.config.js`:

**CSS Variables:**
*   `--section-spacing` - Controls padding/margin between sections
    *   Mobile: `4rem` (64px)
    *   Desktop (≥768px): `6rem` (96px)
*   `--scroll-padding` - Controls scroll offset for anchor links
    *   Mobile: `5rem` (80px)
    *   Desktop (≥768px): `6rem` (96px)

**Available Spacing Classes:**
*   `py-section` - Applies `padding-top` and `padding-bottom` using `var(--section-spacing)`
    *   Usage: Applied to section containers for consistent vertical padding
*   `mb-section` - Applies `margin-bottom` using `var(--section-spacing)`
    *   Usage: Applied to sections that need bottom margin (e.g., Hero section)
*   `pb-section` - Applies `padding-bottom` using `var(--section-spacing)`
    *   Usage: Applied when only bottom padding is needed

**Configuration:**
*   CSS variables are defined in `:root` in `src/styles/globals.css`
*   Tailwind spacing utility `section` is mapped to `var(--section-spacing)` in `tailwind.config.js`
*   `scroll-padding-top` on `html` element uses `var(--scroll-padding)` for anchor link navigation

**Note:** These spacing values follow modern web standards and provide consistent, readable spacing between major sections (Hero, Recent Writing, Selected Works, Experience, Contact).

### 7. Dependency Installation
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
