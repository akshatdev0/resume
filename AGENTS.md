# AGENTS.md

Package character limit: 7,000

## Overview

Modern Astro web application with React integration, featuring a comprehensive shadcn/ui component library built with TailwindCSS v4 for a resume/portfolio site.

## Folder Structure

```
resume-astro/
├── src/
│   ├── components/
│   │   ├── ui/               # 56 shadcn/ui components (accordion, button, dialog, etc.)
│   │   └── Button.astro      # Example Astro component with confetti interaction
│   ├── hooks/
│   │   └── use-mobile.ts     # Responsive breakpoint hook (768px)
│   ├── layouts/
│   │   └── main.astro        # Base HTML layout with slots
│   ├── lib/
│   │   └── utils.ts          # cn() utility for class merging (clsx + tailwind-merge)
│   ├── pages/
│   │   └── index.astro       # Homepage
│   └── styles/
│       └── global.css        # TailwindCSS v4 config with theme variables
├── public/                   # Static assets (favicons)
├── astro.config.mjs          # Astro config with React integration
├── components.json           # shadcn configuration
├── package.json              # Dependencies (Astro, React 19, shadcn/ui)
└── tsconfig.json             # TypeScript config with @ path alias
```

## Core Behaviors & Patterns

### Component Architecture
- **UI Components**: All shadcn/ui components follow composition pattern using class-variance-authority for variant styling
- **Astro Components**: Mix of `.astro` files (for static content) and `.tsx` files (for interactive React components)
- **Client-Side Interactivity**: Astro components use `<script>` tags for vanilla JS interactions (e.g., confetti on button click)

### Styling System
- **TailwindCSS v4**: Uses `@theme inline` directive for design tokens and CSS variables
- **Theme Variables**: Dual theme system (light/dark) with oklch color space for color definitions
- **Class Merging**: `cn()` utility combines clsx and tailwind-merge to handle conditional classes
- **Custom Variants**: Dark mode implemented via `@custom-variant dark (&:is(.dark *))`

### Import Patterns
- **Path Aliases**: `@/` resolves to `./src/*` (configured in tsconfig.json and components.json)
- **Component Imports**: UI components imported from `@/components/ui/*`
- **Type-Safe**: All TSX files use TypeScript with strict mode enabled

## Conventions

### File Naming
- **Astro Files**: kebab-case for pages and layouts (`index.astro`, `main.astro`)
- **React Components**: kebab-case for UI components (`button.tsx`, `alert-dialog.tsx`)
- **Hooks**: kebab-case with `use-` prefix (`use-mobile.ts`)
- **Utilities**: kebab-case (`utils.ts`)

### Code Style
- **TypeScript**: Strict mode enabled, explicit return types for complex functions
- **React Components**: Functional components with TypeScript interfaces for props
- **Imports**: External dependencies first, then internal modules using @ alias
- **CSS**: TailwindCSS utility classes, no inline styles

### Configuration
- **shadcn/ui**: Configured with "new-york" style, neutral base color, and CSS variables enabled
- **Icons**: Lucide React library for iconography
- **Breakpoints**: Mobile breakpoint at 768px (defined in use-mobile.ts hook)

## Working Agreements

### Development Workflow
1. **Context First**: Before modifying components, read both the component file and its usage in pages/layouts to understand the integration points
2. **Verify Imports**: When adding new components, ensure path aliases are correctly configured in both tsconfig.json and components.json
3. **Test Locally**: Run `pnpm dev` after changes to verify the application builds and renders correctly
4. **Component Library**: When adding shadcn/ui components, use the `shadcn` CLI to ensure consistency with the existing configuration

### Code Modifications
- **Preserve Patterns**: Match existing component structure (e.g., cva usage for variants, forwardRef for React components)
- **Styling**: Use TailwindCSS utilities exclusively; avoid adding custom CSS unless adding theme-level variables
- **TypeScript**: Maintain strict typing; avoid `any` types
- **Astro-React Boundary**: Keep static content in `.astro` files, interactive components in `.tsx` files

### Communication
- Reference components with their full path: `src/components/ui/button.tsx:45`
- When discussing styling, specify whether changes affect theme variables (global.css) or component classes
- For responsive behavior, note which breakpoints are affected (mobile < 768px)
