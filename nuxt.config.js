require('dotenv').config()

export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - Bubblask.com',
        title: 'Bubblask',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'Bubblask is the flexible and easy app that use pomodoro technique to manage your time in working, studying. More over Bubblask help you improve the ability to estimate the time of work by analytic how you work!'
            }
        ],
        link: [
            {rel: 'apple-touch-icon', sizes: '57x57', type: 'image/x-icon', href: '/icon/apple-icon-57x57.png'},
            {rel: 'icon', sizes: '96x96', type: 'image/png', href: '/icon/favicon-96x96.png'},
            {rel: 'icon', sizes: '32x32', type: 'image/png', href: '/icon/favicon-32x32.png'},
            {rel: 'icon', sizes: '16x16', type: 'image/png', href: '/icon/favicon-16x16.png'}
        ],
        script: [
            {src: 'https://js.pusher.com/6.0/pusher.min.js'}
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#FFF'},
    /*
    ** Global CSS
    */
    css: [
        '@/style/app.scss',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~/plugins/axios'},
        {src: '~/plugins/auth'},
        {src: '~/plugins/component'},
        {src: '~/plugins/generic'},
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        ['cookie-universal-nuxt', {alias: 'ck'}],
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.API_DOMAIN + '/v1'
    },
    /*
    ** Build configuration
    */
    build: {
        extractCSS: process.env.NODE_ENV === 'production',
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
