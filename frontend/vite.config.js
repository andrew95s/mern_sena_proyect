import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configura la dirección IP a la que se vincula el servidor de desarrollo
    host: '0.0.0.0', // Esto escucha en todas las interfaces disponibles
    // Configura el puerto del servidor de desarrollo
    port: 5173, // Puedes cambiar este número al puerto que desees
  },
});


/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/