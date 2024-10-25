import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Permite acesso externo
    port: 5173, // Defina a porta que deseja usar
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html', // Certifique-se de que seu ponto de entrada está correto
    },
  },
  optimizeDeps: {
    include: ['dependencia-1', 'dependencia-2'], // Adicione dependências específicas se necessário
  },
})
