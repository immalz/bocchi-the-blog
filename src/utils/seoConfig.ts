// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://www.eltallerfantasma.com/", // Production URL.
	description:
		"Blog dedicado a compartir conocimientos sobre impresion 3D y pintura de miniaturas.",
	type: "website",
	image: {
		url: "https://www.eltallerfantasma.com/images/og.jpeg",
		alt: "El taller fantasma",
		width: 705,
		height: 606,
	},
	siteName: "El Taller Fantasma",
	twitter: {
		card: "summary_large_image",
	},
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "El Taller Fastasma",
	short_name: "El Taller Fastasma",
	description:
		"Blog dedicado a compartir conocimientos sobre impresion 3D y pintura de miniaturas.",
	theme_color: "#d5ff00",
	background_color: "#d5ff00",
	display: "fullscreen",
	icons: [
		// {
		// 	src: "/img/icons/favicon-192x192.png",
		// 	sizes: "192x192",
		// 	type: "image/png",
		// },

	],
	screenshots: [
		// {
		// 	src: "/img/screenshots/desktop_1.jpg",
		// 	type: "image/jpeg",
		// 	sizes: "1024x964",
		// 	form_factor: "wide",
		// },

	],
}
