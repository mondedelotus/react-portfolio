import project01 from "./../img/projects/01.webp";
import project01Big from "./../img/projects/01-big.webp";

import project02 from "./../img/projects/02.webp";
import project02Big from "./../img/projects/02-big.webp";

import project03 from "./../img/projects/03.webp";
import project03Big from "./../img/projects/03-big.webp";

import project04 from "./../img/projects/04.webp";
import project04Big from "./../img/projects/04-big.webp";

import project05 from "./../img/projects/05.webp";
import project05Big from "./../img/projects/05-big.webp";

import project06 from "./../img/projects/06.webp";
import project06Big from "./../img/projects/06-big.webp";

const projects = [
	{
		title: 'ContentAdore',
		skills: 'WordPress, PHP, VueJS (+ Vuetify), HTML, CSS (+ Bootstrap 4), JS',
		img: project01,
		imgBig: project01Big,
		projectLink: 'https://contentadore.com/',
	},
	{
		title: 'HeatSign',
		img: project02,
		imgBig: project02Big,
		skills: 'WordPress, PHP, Woocommerce, HTML, CSS',
		projectLink: 'https://www.heatsign.com/',
	},
	{
		title: 'BuyselfieBooth',
		img: project03,
		imgBig: project03Big,
		skills: 'WordPress, PHP, Woocommerce, HTML, CSS, JS',
		projectLink: 'https://buyselfiebooth.com/',
	}
];

const testProjects = [
	{
		title: 'Porten landing',
		img: project04,
		imgBig: project04Big,
		skills: 'HTML, SCSS (with BEM), JS',
		projectLink: 'https://mondedelotus.github.io/spacelab-1-landing/',
	},
	{
		title: 'My team sample',
		img: project05,
		imgBig: project05Big,
		skills: 'HTML, SCSS (with BEM)',
		projectLink: 'https://mondedelotus.github.io/my-team-page/',
	},
	{
		title: 'Interior consultant sample',
		img: project06,
		imgBig: project06Big,
		skills: 'HTML, SCSS (with BEM), JS',
		projectLink: 'https://mondedelotus.github.io/interior-consultant/',
	},
] 

export {projects, testProjects}