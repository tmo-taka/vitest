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
    // NOTE: coverageではall:trueを最初にしなければ描画されない
    test: {
        globals: true,
        include: ['**/*.spec.?(c|m)[jt]s?(x)'],
        coverage: {
            provider: 'c8',
            all: true,
            include: ['test/**/*.ts'],
            exclude: ['test/setup/*.ts'],
            reporter: ["html","text"]
        },
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
    },
})