# ⚽ Scoreboard For Any Team

This simple modern, customizable scoreboard application was built with React and TypeScript for the Jersey City Soccer Association girls league, but anyone can use it.

**[scores.surge.sh](https://scores.surge.sh)**

**Live Scoring** • **Team Customization** • **Mobile-First Design**

## Features

- **Real-time Score Tracking**: Increment and decrement scores for both teams
- **Team Customization**: Set custom team names, colors, and background colors
- **Settings Modal**: Easy-to-use interface for personalizing your scoreboard
- **Modern Design**: Glassmorphic UI with customizable gradient backgrounds
- **Fully Typed**: Complete TypeScript implementation with strict type checking
- **Responsive**: Mobile-first design that works on all screen sizes
- **Accessible**: ARIA labels and semantic HTML for screen readers
- **Performance Optimized**: Uses React hooks and memoization for optimal performance

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Modern CSS with glassmorphism effects
- **Fonts**: Google Fonts (Sour Gummy for headers)
- **Customization**: Dynamic team names and color theming

## Design Highlights

- **Dark Theme**: Beautiful gradient background with customizable colors
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Dynamic Colors**: Customizable team and background colors
- **Typography**: Sour Gummy font for the main title
- **Responsive Layout**: Side-by-side on desktop, optimized for mobile

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ScoreButton.tsx   # Increment/decrement buttons
│   ├── ScoreDisplay.tsx  # Score display with animations
│   ├── TeamSection.tsx   # Complete team section
│   ├── TeamSettings.tsx  # Settings modal for customization
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

### Team Settings

Click the ⚙️ settings button to customize:

- **Team Name**: Set your team's display name
- **Team Color**: Choose the color for team elements and text
- **Background Color**: Customize the gradient background

All changes are applied instantly and persist during your session.

### Manual Customization

You can also edit default values in `src/hooks/useScoreboard.ts`:

```typescript
const [homeTeam, setHomeTeam] = useState<Team>({
  name: "Your Team Name",
  score: 0,
});

const [teamCustomization, setTeamCustomization] = useState<TeamCustomization>({
  name: "Your Team Name",
  color: "#your-color",
  backgroundColor: "#your-bg-color",
});
```

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy with Surge.sh or Any Static Host

This project can be deployed to any static hosting service. Here's an example using [Surge.sh](https://surge.sh/):

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

## Use Cases

Perfect for:

- **Sports Events**: Soccer, basketball, hockey, tennis, etc.
- **Gaming Tournaments**: Esports, board games, competitions
- **Classroom Activities**: Quiz competitions, team challenges
- **Events**: Any scenario where you need to track two competing sides
