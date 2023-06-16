/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

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
        Components({
            dts: false,
            resolvers: [
                (componentName: string) => {
                    if (componentName === 'Form') {
                        return {
                            name: 'default',
                            as: componentName,
                            from: '../components/Form.vue',
                        }
                    }
                    if (componentName === 'List') {
                        return {
                            name: 'default',
                            as: componentName,
                            from: '../components/List.vue',
                        }
                    }
                    if (componentName === 'Form') {
                        return {
                            name: 'default',
                            as: componentName,
                            from: '../components/Form.vue',
                        }
                    }
                },
            ],
        })
    ],
    test: {
        globals: true,
        coverage: {
            provider: 'c8',
            include: ['test/**/*.{ts}'],
            exclude: [],
            all: true,
        },
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
    },
})