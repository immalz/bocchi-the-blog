import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap"

import vercel from "@astrojs/vercel/serverless";
import { seoConfig, manifest } from './src/utils/seoConfig';

export default defineConfig({
	prefetch: true,
	devToolbar: {
		enabled: false,
	},
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [sitemap()],
	output: "hybrid",
	site: seoConfig.baseURL,
	// vite: {
	// 	build: {
	// 		cssMinify: "lightningcss",
	// 	},
	// 	ssr: {
	// 		noExternal: ["path-to-regexp"],
	// 	},
	// 	plugins: [
	// 		VitePWA({
	// 			registerType: "autoUpdate",
	// 			manifest,
	// 			workbox: {
	// 				globDirectory: ".vercel/output/static",
	// 				globPatterns: [
	// 					"**/*.{html,js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"
	// 				],
	// 				runtimeCaching: [
	// 					{
	// 						urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
	// 						handler: "CacheFirst",
	// 						options: {
	// 							cacheName: "images",
	// 							expiration: {
	// 								maxEntries: 50,
	// 								maxAgeSeconds: 30 * 24 * 60 * 60,
	// 							},
	// 						},
	// 					},
	// 					{
	// 						urlPattern: /^https?.*/,
	// 						handler: "StaleWhileRevalidate",
	// 						options: {
	// 							cacheName: "static-assets",
	// 							expiration: {
	// 								maxEntries: 200,
	// 								maxAgeSeconds: 24 * 60 * 60 * 30,
	// 							},
	// 						},
	// 					},
	// 				],
	// 				navigateFallback: null,
	// 			}
	// 		}),
	// 	],
	// },
});
