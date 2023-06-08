/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        Vue(),
    ],
    test: {
        globals: true,
        coverage: {
            provider: 'c8',
            include: ['test/**/*.{ts}'],
            exclude: [],
            all: true,
        },
        environment: 'happy-dom',
    },
})