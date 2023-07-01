export default defineNuxtPlugin(nuxtApp => {
    // nuxtApp.provide('openChrome', () => {
    //     console.log('ddd')
    // })
    const openChrome = () => {
        window.open('https://www.google.com/')
    }
    // nuxtApp.openChrome = openChrome
    return {
        provide: {
            openChrome
        }
    }
})