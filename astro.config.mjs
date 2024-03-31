import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap"
import { VitePWA } from "vite-plugin-pwa"

import vercel from "@astrojs/vercel/serverless";
import { seoConfig, manifest } from './src/utils/seoConfig';

export default defineConfig({
	compressHTML: true,
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
	build: {
		inlineStylesheets: "always",
	},
	output: "server",
	site: seoConfig.baseURL,
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
		ssr: {
			noExternal: ["path-to-regexp"],
		},
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
					globDirectory: ".vercel/output/static",
					globPatterns: [
						"**/*.{html,js,css,svg,avif,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
					],
					runtimeCaching: [
						{
							urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
							handler: "CacheFirst",
							options: {
								cacheName: "images",
								expiration: {
									maxEntries: 100,
									maxAgeSeconds: 30 * 24 * 60 * 60,
								},
							},
						},
						{
							urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
							handler: "CacheFirst",
							options: {
								cacheName: "fonts",
								expiration: {
									maxEntries: 10,
									maxAgeSeconds: 30 * 24 * 60 * 60,
								},
							},
						},
					],
					navigateFallback: null,
				},
			}),
		],
	},
});
