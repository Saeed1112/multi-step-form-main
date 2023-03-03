// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss'
    ],
    ssr: false,
    app: {
        head: {

            htmlAttrs: {
                lang: 'en'
            },
            title: 'Frontend Mentor | Multi-step form',
            link: [
                {
                    href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap',
                    rel: 'stylesheet'
                },
                {href: 'https://fonts.gstatic.com', crossorigin: 'anonymous', rel: 'preconnect'},
                {href: 'https://fonts.googleapis.com', crossorigin: 'anonymous', rel: 'preconnect'}
            ]
        }
    }

})
