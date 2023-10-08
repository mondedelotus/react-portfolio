// REAL
import ca from "./../img/projects/real/ca.webp";
import caBig from "./../img/projects/real/ca-big.webp";

import heatsign from "./../img/projects/real/heat-sign.webp";
import heatsignBig from "./../img/projects/real/heat-sign-big.webp";

import buyselfie from "./../img/projects/real/buyselfie.webp";
import buyselfieBig from "./../img/projects/real/buyselfie-big.webp";

import selfiebooth from "./../img/projects/real/selfieboothco.webp";
import selfieboothBig from "./../img/projects/real/selfieboothco-big.webp";

import nona from "./../img/projects/real/nonaphotographyca.webp";
import nonaBig from "./../img/projects/real/nonaphotographyca-big.webp";

// TEST
import funiro from "./../img/projects/test/funiro.webp";
import funiroBig from "./../img/projects/test/funiro-big.webp";

// import porten from "./../img/projects/test/porten-2.webp";
// import portenBig from "./../img/projects/test/porten-big.webp";

// import myTeam from "./../img/projects/test/my-team.webp";
// import myTeamBig from "./../img/projects/test/my-team-big.webp";

// import interior from "./../img/projects/test/interior-cons-2.webp";
// import interiorBig from "./../img/projects/test/interior-cons-big.webp";

import taskManager from "./../img/projects/test/task-manager.webp";
import taskManagerBig from "./../img/projects/test/task-manager-big.webp";

import randomProducts from "./../img/projects/test/random-products.webp";
import randomProductsBig from "./../img/projects/test/random-products-big.webp";

const projects = [
    {
        title: "ContentAdore",
        skills: "WordPress, PHP, VueJS (+ Vuetify), HTML, CSS (+ Bootstrap 4), JS, Swiper",
        img: ca,
        imgBig: caBig,
        projectLink: "https://contentadore.com/",
    },
    {
        title: "HeatSign",
        img: heatsign,
        imgBig: heatsignBig,
        skills: "WordPress, PHP, Woocommerce, HTML, CSS",
        projectLink: "https://www.heatsign.com/",
    },
    {
        title: "BuyselfieBooth",
        img: buyselfie,
        imgBig: buyselfieBig,
        skills: "WordPress, PHP, Woocommerce, HTML, CSS, JS",
        projectLink: "https://buyselfiebooth.com/",
    },
    {
        title: "SelfieBoothCo",
        img: selfiebooth,
        imgBig: selfieboothBig,
        skills: "WordPress, PHP, HTML, CSS, JS",
        projectLink: "https://selfieboothco.com/",
    },
    {
        title: "Nona Photography",
        img: nona,
        imgBig: nonaBig,
        skills: "WordPress, PHP, HTML, CSS, JS",
        projectLink: "https://nonaphotographyca.com/",
    },
];

const testProjects = [
    {
        title: "Funiro landing",
        img: funiro,
        imgBig: funiroBig,
        skills: "HTML, SCSS (with BEM), JS, Swiper, Lightgallery, Gulp",
        projectLink: "https://funiro-two.vercel.app/",
    },
    // {
    //     title: "Porten landing",
    //     img: porten,
    //     imgBig: portenBig,
    //     skills: "HTML, SCSS (with BEM), JS, Swiper",
    //     projectLink: "https://mondedelotus.github.io/spacelab-1-landing/",
    // },
    // {
    // 	title: 'My team sample',
    // 	img: myTeam,
    // 	imgBig: myTeamBig,
    // 	skills: 'HTML, SCSS (with BEM)',
    // 	projectLink: 'https://mondedelotus.github.io/my-team-page/',
    // },
    {
        title: "Task Manager App",
        img: taskManager,
        imgBig: taskManagerBig,
        skills: "React, Redux, CSS Modules, SCSS, Framer Motion, Vite, Vercel",
        projectLink: "https://task-manager-lac-three.vercel.app/",
    },
    // {
    //     title: "Interior consultant sample",
    //     img: interior,
    //     imgBig: interiorBig,
    //     skills: "HTML, SCSS (with BEM), JS",
    //     projectLink: "https://mondedelotus.github.io/interior-consultant/",
    // },
    {
        title: "Random Products WP Plugin",
        img: randomProducts,
        imgBig: randomProductsBig,
        skills: "WordPress, WooCommerce",
        projectLink: "https://github.com/mondedelotus/random-products",
    },
];

export { projects, testProjects };
