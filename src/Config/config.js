import { defineConfig } from 'vite';

export default defineConfig({
    // Other Vite configuration options
    server: {
      // Example: Use environment variable for port
      port: process.env.VITE_APP_PORT || 3000,
    },
  });