import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3002,
    hot: true,
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
