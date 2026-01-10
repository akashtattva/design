---
name: Interactive Folder Feature Integration
overview: Integrate a single interactive 3D folder component into the portfolio to showcase design work, adapted to work with the existing CDN-based React/Tailwind setup and using a simple data structure for easy image addition later.
todos:
  - id: add-utility-functions
    content: Add cn() utility function for className merging (replacing clsx/tailwind-merge)
    status: pending
  - id: create-project-data
    content: Create designProjects array with placeholder data structure for easy image addition
    status: pending
  - id: adapt-project-card
    content: Create ProjectCard component adapted for CDN React (no TypeScript, inline SVGs)
    status: pending
    dependencies:
      - add-utility-functions
  - id: adapt-image-lightbox
    content: Create ImageLightbox component with navigation and keyboard support
    status: pending
    dependencies:
      - add-utility-functions
  - id: adapt-animated-folder
    content: Create AnimatedFolder component with 3D hover effects matching portfolio aesthetic
    status: pending
    dependencies:
      - adapt-project-card
      - adapt-image-lightbox
      - create-project-data
  - id: integrate-section
    content: Add new Projects folder section to App component between RecentWriting and Projects sections
    status: pending
    dependencies:
      - adapt-animated-folder
---

# Interactive Folder Feature Integration

## Overview

Add an interactive 3D folder component (similar to folder_feature.md) to showcase design projects. The component will be adapted to work with the existing CDN-based stack (React 18, Tailwind CSS, GSAP) and use a simple JavaScript array for project data that's easy to modify later.

## Implementation Details

### 1. Component Adaptation

- **Location**: Add the folder component code directly into `index.html` within the existing `<script type="text/babel">` block
- **Framework compatibility**:
- Remove TypeScript types (convert to plain JavaScript)
- Replace `lucide-react` icons with inline SVGs or Iconify (matching current site's icon approach)
- Replace `clsx`/`tailwind-merge` with a simple `cn()` utility function using template literals
- Use existing React hooks (already available via CDN)

### 2. Project Data Structure

Create a simple JavaScript array in `index.html` for easy modification:

```javascript
const designProjects = [
  { id: "1", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", title: "Project 1" },
  { id: "2", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", title: "Project 2" },
  // Easy to add more: just add objects to this array
];
```



### 3. Component Structure

- **AnimatedFolder**: Main folder component with 3D hover effect
- **ProjectCard**: Individual project cards that fan out on hover
- **ImageLightbox**: Full-screen lightbox for viewing project images (with navigation)

### 4. Integration Points

- **Placement**: Add as a new section after `RecentWriting` and before `Projects` section
- **Styling**: Match existing dark aesthetic (zinc-950 background, zinc color palette)
- **Animations**: Use CSS transitions (no additional GSAP needed for folder animations)
- **Icons**: Use inline SVGs matching the style of existing icons in the codebase

### 5. Files to Modify

- `index.html`: 
- Add folder component code
- Add project data array
- Add new section in the App component
- Add simple `cn()` utility for className merging

### 6. Easy Image Addition Later

The project data structure will be clearly marked with comments showing:

- Where to add new projects
- Expected format (id, image URL, title)
- Example of adding local images vs. external URLs

## Technical Considerations

- No build step required (works with Babel Standalone)
- No additional dependencies (uses existing CDN libraries)
- Responsive design matching current breakpoints
- Maintains existing custom cursor behavior
- Lightbox includes keyboard navigation (Escape, Arrow keys)

## Styling Adaptations

- Use existing Tailwind config colors (zinc palette)
- Match typography (Helvetica Neue, DepartureMono fonts)