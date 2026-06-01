// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'ShouldISwitch',
			customCss: ['./src/styles/custom.css'],

			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				fr: {
					label: 'Français',
					lang: 'fr',
				},
				es: {
					label: 'Español',
					lang: 'es',
				},
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
			},

			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/CeriseeBrandy/Should-I-Switch-',
				},
			],

			sidebar: [
				{
					label: 'Start Here',
					items: [
						{
							label: 'What is Linux?',
							slug: 'start-here/what-is-linux',
						},
					],
				},
			],
		}),
	],
});