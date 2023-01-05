import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import dns from 'dns';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        homepage: 'http://localhost:5000/assets/homepage.js',
      },
      shared: ['react']
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
