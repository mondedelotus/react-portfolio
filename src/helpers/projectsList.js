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

import taskManager from "./../img/projects/test/task-manager.webp";
import taskManagerBig from "./../img/projects/test/task-manager-big.webp";

import randomProducts from "./../img/projects/test/random-products.webp";
import randomProductsBig from "./../img/projects/test/random-products-big.webp";

function List(advances) {
    const listItems = advances.map((item) => <li key={item.id}>{item.adv}</li>);
    return <ul>{listItems}</ul>;
}

const projects = [
    {
        title: "ContentAdore",
        adv: List([
            {
                id: 0,
                adv: "Here I successfully implemented a bespoke design for the company's WordPress website, which garnered positive feedback from clients for its aesthetic appeal and user-friendly interface.",
            },
            {
                id: 1,
                adv: "Also I orchestrated the seamless integration of Redmine CRM with the website using API, streamlining lead processing and hiring procedures. This automation led to enhanced operational efficiency and a quicker response time to client inquiries.",
            },
            {
                id: 2,
                adv: "Strategically optimized website performance and load speed, resulting in a significant boost in search engine rankings through technical SEO enhancements. This not only improved user experience but also amplified the site's online visibility.",
            },
            {
                id: 3,
                adv: "Innovatively crafted a Vue.js-powered one-page price calculator application. This solution empowered clients to access instant pricing information, independent of website manager availability, thus expediting the decision-making process.",
            },
            {
                id: 4,
                adv: "Spearheaded the development and deployment of versatile chatbots across Telegram, Facebook, and the company's website, enabling seamless order placements and enhancing customer engagement.",
            },
            {
                id: 5,
                adv: "Developed a plugin for Google Docs that automated numerous processes, significantly reducing workflow duration by 2–3 times. This technical innovation expedited internal procedures and optimized resource utilization.",
            },
        ]),
        skills: "WordPress, PHP, VueJS (+ Vuetify), HTML, CSS (+ Bootstrap 4), JS, Swiper",
        img: ca,
        imgBig: caBig,
        projectLink: "https://contentadore.com/",
    },
    {
        title: "HeatSign",
        adv: List([
            {
                id: 0,
                adv: "Migrated an already completed website to the WooCommerce platform, realizing the layout of product pages and connecting all necessary payment systems.",
            },
            {
                id: 1,
                adv: "Performed deep optimization of site speed by not only optimizing style files and scripts, but also by disabling plugins only on certain pages.",
            },
        ]),
        img: heatsign,
        imgBig: heatsignBig,
        skills: "WordPress, PHP, Woocommerce, HTML, CSS",
        projectLink: "https://www.heatsign.com/",
    },
    {
        title: "BuyselfieBooth",
        adv: List([
            {
                id: 0,
                adv: "Transferred a pre-existing website to the WooCommerce platform, designed product page layouts, and integrated essential payment systems.",
            },
            {
                id: 1,
                adv: "Rebuild all pages on the website (switched to a completely new design), connected contact forms and HubSpot CRM.",
            },
        ]),
        img: buyselfie,
        imgBig: buyselfieBig,
        skills: "WordPress, PHP, Woocommerce, HTML, CSS, JS",
        projectLink: "https://buyselfiebooth.com/",
    },
    {
        title: "SelfieBoothCo",
        adv: List([
            {
                id: 0,
                adv: "Changed the layout, brought it in line with the new design.",
            },
            {
                id: 1,
                adv: "Hired a new web developer for the project, participated as a senior developer-consultant.",
            },
        ]),
        img: selfiebooth,
        imgBig: selfieboothBig,
        skills: "WordPress, PHP, HTML, CSS, JS",
        projectLink: "https://selfieboothco.com/",
    },
    {
        title: "Nona Photography",
        adv: List([
            {
                id: 0,
                adv: "Made changes to pages using builder.",
            },
            {
                id: 1,
                adv: "Migrated site to AWS server, optimized site speed.",
            },
            {
                id: 2,
                adv: "Configured site security, builded site-map, added proper seo settings, connected analytics.",
            },
        ]),
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
