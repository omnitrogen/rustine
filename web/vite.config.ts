import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	server: {
		host: true,
		port: 8080,
		strictPort: true
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
