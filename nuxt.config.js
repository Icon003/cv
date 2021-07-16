import path from 'path'
import fs from 'fs'

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",
	// target: "server",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "nuxt-cv",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ hid: "description", name: "description", content: "" }
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/color.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

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
