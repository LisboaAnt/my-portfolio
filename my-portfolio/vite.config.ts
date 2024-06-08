import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio/', // Substitua 'my-portfolio' pelo nome do seu repositório
  plugins: [react()],
})
