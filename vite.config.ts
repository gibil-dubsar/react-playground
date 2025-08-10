/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
    base: '/react-playground/',
    plugins: [
        react(),
        tailwindcss(),
        Pages({
            dirs: 'pages',
            extensions: ['jsx', 'js', 'ts', 'tsx'],
        }),
    ],
})
