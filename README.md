# ⚽ Tsunami Scoreboard

A modern, TypeScript-powered soccer scoreboard application built with React and Vite. Track goals for the Tsunami team and their opponents.

**[tsunami.surge.sh](https://tsunami.surge.sh)**

**Live Soccer Scoring** • **Modern TypeScript** • **Mobile-First Design**

## Features

- **Real-time Score Tracking**: Increment scores for both teams with intuitive buttons
- **Modern Design**: Glassmorphic UI with dark gradient background and neon accents
- **Fully Typed**: Complete TypeScript implementation with strict type checking
- **Responsive**: Mobile-first design that works on all screen sizes
- **Accessible**: ARIA labels and semantic HTML for screen readers
- **Performance Optimized**: Uses React hooks and memoization for optimal performance

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Modern CSS with glassmorphism effects
- **Fonts**: Google Fonts (Codystar for headers)
- **Icons**: Emoji-based (⚽🌊)

## Design Highlights

- **Dark Theme**: Beautiful gradient background (#0f0f23 to #16213e)
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Neon Accents**: Cyan (#00f5ff) highlights with glow effects
- **Typography**: Codystar font for the main title
- **Responsive Layout**: Side-by-side on desktop, optimized for mobile

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ScoreButton.tsx   # Typed score increment button
│   ├── ScoreDisplay.tsx  # Score display with animations
│   ├── TeamSection.tsx   # Complete team section
│   └── index.ts          # Barrel exports
├── hooks/                # Custom React hooks
│   ├── useScoreboard.ts  # Score management logic
│   └── index.ts          # Hook exports
├── types/                # TypeScript definitions
│   ├── index.ts          # Main type definitions
│   └── global.d.ts       # Global declarations
├── utils/                # Utility functions
│   ├── scoreUtils.ts     # Score calculation helpers
│   └── index.ts          # Utility exports
├── App.tsx               # Main application component
├── App.css               # Styling with mobile-first approach
└── main.tsx              # Application entry point
```

## TypeScript Features

- **Strict Type Checking**: Comprehensive interfaces for all components
- **Custom Hooks**: Typed state management with `useScoreboard`
- **Type Guards**: Runtime type validation for scores
- **Event Handling**: Properly typed React event handlers
- **Accessibility**: Typed ARIA attributes and semantic HTML

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Customization

### Team Names

Edit the team names in `src/hooks/useScoreboard.ts`:

```typescript
const [tsunamiTeam, setTsunamiTeam] = useState<Team>({
  name: "Your Team Name",
  emoji: "🌊",
});
```

### Colors

Modify the color scheme in `src/App.css`:

```css
:root {
  --primary-color: #00f5ff; /* Cyan accent */
  --bg-start: #0f0f23; /* Dark blue */
  --bg-end: #16213e; /* Darker blue */
}
```

### Fonts

Update the Google Fonts import in `index.html` and CSS font-family.

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy with Surge.sh

This project is deployed using [Surge.sh](https://surge.sh/) for fast, simple static hosting:

1. **Install Surge globally**

   ```bash
   npm install -g surge
   ```

2. **Build and deploy**

   ```bash
   npm run build
   cd dist
   npx surge
   ```

3. **Follow prompts** to set your domain and deploy instantly

