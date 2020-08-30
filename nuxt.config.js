export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',

  srcDir: 'src/',
  dir: {
    "pages": 'app/pages',
    "components": 'app/components'
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  serverMiddleware: [
    {
      path: 'api/redirect-oauth',
      handler: '~/middleware/auth.js'
    }
  ],

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/container.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/dotenv', { path: 'src/resources/' }]

  ],
  /*
  ** Nuxt.js modules
  */


  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    withCredentials: true,
    proxy: true,
  },

  proxy: {

   '/login/oauth/access_token': { 
    target: 'https://github.com/login/oauth/access_token',
    changeOrigin: true
  } 
},

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {

    extend (config, { isDev, isClient }) {
 
       config.node = {
            fs: 'empty'
        }
 
    }


  }
}
