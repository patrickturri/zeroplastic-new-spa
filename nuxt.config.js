export default {
	mode: 'universal',
	target: 'static'
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'ZeroPlastic',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ],
		script: [
			{
				src: 'https://code.jquery.com/jquery-3.2.1.min.js',
				type: 'text/javascript'
			}
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [ 'nuxt-svg-loader' ],

	purgeCSS: {
		whitelist: [ 'hidden' ],
		whitelistPatterns: [ /md:w-[1-6]/ ]
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
	   ** You can extend webpack config here
	   */
		extend(config, ctx) {
			loaders: {
				file: {
					esModule: false;
				}
			}
		}
	}
};
