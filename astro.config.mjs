// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
	site: siteConfig.siteUrl,
	integrations: [
		mdx(),
		sitemap({
			filter(page) {
				const pathname = new URL(page).pathname;
				return !['/cookies/', '/privacy/', '/terms/'].includes(pathname);
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
