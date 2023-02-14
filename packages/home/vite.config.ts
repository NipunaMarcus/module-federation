import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';
import tsconfigPaths from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
