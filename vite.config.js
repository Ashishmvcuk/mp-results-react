import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the MP Results React app.
// This sets up React support and defines the default development server
// port. When deploying to GitHub Pages, the build output in `dist/`
// will be published automatically by the workflow defined in
// `.github/workflows/deploy.yml`.

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
});
