import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Pages from 'vite-plugin-pages';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
        tailwindcss(),
            Pages({
      dirs: 'pages',         // directory where your pages are stored
      extensions: ['jsx', 'js'], // include any file extensions you use
    base: '/react-playground/'
    }),
  ],
})


