require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

export default {
	// Target: https://go.nuxtjs.dev/config-target
	// target: "static",
	target: "server",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: `${process.env.APP_TITLE}`,
		htmlAttrs: {
			lang: "ru"
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ hid: "description", name: "description", content: `${process.env.APP_DESCRIPTION}` },
			{ hid: "og:title", name: "og:title", content: `${process.env.APP_TITLE}` },
			{ hid: "og:type", name: "og:type", content: "profile" },
			{ hid: "og:url", name: "og:url", content: "https://burbasivan.ninja" },
		],
		link: [
			{ type: 'image/png', size: '16x16', rel: 'icon', href: '/favicon/favicon-16x16.png' },
			{ type: 'image/png', size: '32x32', rel: 'icon', href: '/favicon/favicon-32x32.png' },
			{ type: 'image/png', size: '96x96', rel: 'icon', href: '/favicon/favicon-96x96.png' },
			{ type: 'image/png', size: '120x120', rel: 'icon', href: '/favicon/favicon-120x120.png' },
			{ type: 'image/png', size: '192x192', rel: 'icon', href: '/favicon/android-icon-192x192.png' },

			{ type: 'image/png', size: '57x57', rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-57x57.png' },
			{ type: 'image/png', size: '60x60', rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-60x60.png' },
			{ type: 'image/png', size: '72x72', rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-72x72.png' },
			{ type: 'image/png', size: '76x76', rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-76x76.png' },
			{ type: 'image/png', size: '114x114', rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-114x114.png' },
			{ type: 'image/png', size: '120x120', rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-120x120.png' },
			{ type: 'image/png', size: '144x144', rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-144x144.png' },
			{ type: 'image/png', size: '152x152', rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-152x152.png' },
			{ type: 'image/png', size: '180x180', rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-180x180.png' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"@/assets/css/color.css",
		"@/assets/css/fonts.css"
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		// { src: "@/plugins/jsPDF.js", mode: "client" },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: false,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/color-mode'
	],
	colorMode: {
		// preference: 'light', // default value of $colorMode.preference
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxt/content", "@nuxtjs/dayjs"],
	dayjs: {
		locales: ['ru', 'en'],
		defaultLocale: 'ru',
		defaultTimeZone: 'Europe/Moscow',
		plugins: [
			'utc',
			'timezone'
		]
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	server: {}
};
