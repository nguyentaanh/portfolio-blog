import type { ImageMetadata } from 'astro';
import bcombsImage from '../assets/images/bcombs.webp';
import boardspeakImage from '../assets/images/boardspeak.webp';
import nestaraImage from '../assets/images/nestara.webp';
import gemxImage from '../assets/images/gemx-funnel.png';

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
		name: 'b.combs',
		title: 'A CRM designed around people and the work behind the data',
		description:
			'A more humane CRM experience for teams balancing operational detail with relationship-driven work.',
		background: 'cyan',
		variant: 'split',
		href: '/work/nextpoint',
		image: bcombsImage,
		alt: 'b.combs CRM preview showing nonprofit workflow screens',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Nestara',
		title: 'Helping first-time buyers feel guided through a high-stress life decision',
		description:
			'A mobile-first experience focused on reassurance, next-step clarity, and decision confidence.',
		background: 'lavender',
		variant: 'mobile',
		href: '/work/nextpoint',
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
		href: '/work/nextpoint',
		image: boardspeakImage,
		alt: 'BoardSpeak web app preview showing rewards and community interface',
		imageClass: 'project-preview-image',
	},
];
