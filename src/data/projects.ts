import type { ImageMetadata } from 'astro';
import boardspeakImage from '../assets/images/boardspeak.webp';
import nestaraImage from '../assets/images/nestara.webp';
import gemxImage from '../assets/images/gemx-funnel.png';
import importExportImage from '../assets/images/ie-contexts.png';
import helpCentreImage from '../assets/images/hc-result.png';
import gemxPriceTestingImage from '../assets/images/anh-3-ver-2.png';

export type Project = {
	name: string;
	title: string;
	
	description: string;
	background: 'lime' | 'cyan' | 'lavender' | 'mint';
	variant: 'desktop' | 'split' | 'mobile' | 'board';
	href: string;
	image: ImageMetadata;
	alt: string;
	imageClass: string;
};

export const workPageSize = 10;

export const projects: Project[] = [
	{
		name: 'GemX',
		title: 'Làm sao để tăng Conversion của GemX?',
		description:
			'A question-by-question data investigation that found the real conversion lever — and made the case for building Price testing. Written in Vietnamese.',
		background: 'lavender',
		variant: 'desktop',
		href: '/work/gemx-price-testing',
		image: gemxPriceTestingImage,
		alt: 'GemX price experiment screen with Control and Variant columns side by side',
		imageClass: 'project-preview-image',
	},
	{
		name: 'GemX',
		title: "Why GemX's activation drops — and what to do about it",
		description:
			'A data-driven investigation into a 61% drop-off in feature activation, and the root causes behind why only 6.7% of installs convert to paid.',
		background: 'lime',
		variant: 'desktop',
		href: '/work/gemx',
		image: gemxImage,
		alt: 'GemX activation funnel chart showing a 61% drop-off at the Feature Use step',
		imageClass: 'project-preview-image',
	},
	{
		name: 'GemPages',
		title: 'Improving Import/Export template recognition',
		description:
			'A competitor-research study that solves the awareness problem for Export/Import, surfacing the feature in the contexts where users actually reach for it.',
		background: 'cyan',
		variant: 'split',
		href: '/work/import-export',
		image: importExportImage,
		alt: 'Import/Export template recognition case study preview showing the two usage contexts',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Help Centre',
		title: 'Supporting the customer care team with a Help Centre',
		description:
			'A competitor-research and UI design case study on a shared Help Centre home page for EcomSolid and GemPages, cutting repetitive support load.',
		background: 'mint',
		variant: 'desktop',
		href: '/work/help-centre',
		image: helpCentreImage,
		alt: 'Help Centre home page designed for EcomSolid and GemPages',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Nestara',
		title: 'Helping first-time buyers feel guided through a high-stress life decision',
		description:
			'A mobile-first experience focused on reassurance, next-step clarity, and decision confidence.',
		background: 'lavender',
		variant: 'mobile',
		href: '/work/import-export',
		image: nestaraImage,
		alt: 'Nestara mobile app preview showing real estate product screens',
		imageClass: 'project-preview-image',
	},
	{
		name: 'BoardSpeak',
		title: 'Turning community participation into a sustainable growth loop',
		description:
			'A civic product concept that makes participation feel rewarding, visible, and easier to sustain over time.',
		background: 'mint',
		variant: 'board',
		href: '/work/import-export',
		image: boardspeakImage,
		alt: 'BoardSpeak web app preview showing rewards and community interface',
		imageClass: 'project-preview-image',
	},
];
