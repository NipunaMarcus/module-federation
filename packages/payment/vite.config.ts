import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import dns from 'dns';
import tsconfigPaths from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'payment',
      filename: 'payment.js',
      exposes: {
        './Payment': './src/views/payment/index.tsx'
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: 'localhost',
    port: 5002,
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
