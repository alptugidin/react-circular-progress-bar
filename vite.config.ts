import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-circular-progress-bar/',
  plugins: [react()],
  server: {
    host: true
  },
})
