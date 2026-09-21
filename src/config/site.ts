export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

const defaultSiteUrl = 'https://taanhnguyen.design';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
	name: 'Taanh',
	title: 'Taanh | Personal Product Designer Portfolios',
	description:
		'Taanh — UI/UX Product Designer crafting clear, user-centered digital products. Explore case studies in UX research, interface design, and design systems.',
	// Set SITE_URL or PUBLIC_SITE_URL to keep canonicals, robots.txt, and the sitemap aligned in each environment.
	siteUrl: normalizedSiteUrl,
	email: 'nguyentaanh68@gmail.com',
	locale: 'vi-VN',
	authorName: 'Taanh',
	authorRole: 'Product Designer',
	keywords: [
		'UI/UX Product Designer',
		'Product Designer Portfolio',
		'UX Research',
		'Interface Design',
		'Design Systems',
		'Product Design',
		'Case Studies',
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/resume', label: 'Resume' },
	],
	extraPages: [
		{ href: '/work/gemx', label: 'Case Study' },
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
		{ href: '/404', label: '404' },
	],
	legalLinks: [
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
	],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/taanhnguyen/', label: 'LinkedIn' },
		{ href: 'https://www.behance.net/nguyentaanh68', label: 'Behance' },
	],
};
