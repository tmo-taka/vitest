import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/tomoya.takahara/Desktop/自習用/vitest/vitest-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}