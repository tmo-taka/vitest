/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [
        Vue(),
        // defaultのauto importをこちらで処理する
        AutoImport({
            imports: [
                // presets
                'vue',
                'vue-router',
                // custom
                {
                    '@vueuse/core': [
                        // named imports
                        'useMouse', // import { useMouse } from '@vueuse/core',
                    ],
                },
            ],
        }),
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