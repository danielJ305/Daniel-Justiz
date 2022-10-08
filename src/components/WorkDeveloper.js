import React from 'react';
import WorkProject from './WorkProject';
import fiuImg from '../../public/Media/fiu-mockup1.jpg';
import homeCare from '../../public/Media/ParadiseHomeCare.jpg';
import ecommerceAra from '../../public/Media/1Ecommerce Site-purdygoods.anibaljustiz.net.png';
import freightHub from '../../public/Media/freighthub.png';

class WorkDeveloper extends React.Component {
    project = {
        projects: [{
                title: "Purdy Goods Shoppe E-Commerce",
                description: "This is a website for a client who wants to transition her products from Etsy to her website to avoid listing fees. I am working with another developer that works on .NET/C# and he requested the website on clean HTML/CSS/Javascript. The website is still in progress.",
                tools: ['HMTL', 'SASS', 'Javascript', 'ES6', 'Bootstrap'],
                gitLink: 'https://github.com/danielJ305/Purdy-Goods-Shoppe',
                link: 'http://purdygoods.anibaljustiz.net/',
                img: ecommerceAra
            },
            {
                title: "Freight Hub Group",
                description: "While working for Freight Hub Group I had to administer all the website listed under \"pick&go\" on WPEngine as well as working on all of them.",
                tools: ['HMTL', 'Javascript', 'CSS', 'WordPress', 'WPEngine, WP-Bakery, Elementor, WP-Forms, Mailchimp'],
                gitLink: '',
                link: 'https://gofreighthub.io/',
                img: freightHub
            },
            {
                title: "Paradise Home Care Website",
                description: "This Website is for a Miami-based client's elderly care business. The site is still under construction, waiting for the home to be finished being constructed.",
                tools: ['HMTL', 'SASS', 'Javascript', 'NodeJS Handlebars'],
                gitLink: 'https://github.com/danielJ305/RetirementHome',
                link: 'https://justiz-paradisehome-website.herokuapp.com/',
                img: homeCare
            },
            {
                title: "FIU (Florida International University) Website Mockup",
                description: "After learning HTML/CSS/Javascript this was one of the first personal projects I built. A replica of the FIU Website back in 2018. Fully responsive and an exact mockup of the actual 2018 website.",
                tools: ['HTML', 'SASS', 'Bootstrap4', 'Vanilla JS'],
                gitLink: 'https://github.com/danielJ305/FIU-Mockup-Website',
                link: 'https://danielj305.github.io/FIU-Mockup-Website/',
                img: fiuImg
            }
        ]
    } 

    render = () => (
        <div className="work-developer">
            {
                this.project.projects.map((project) => (
                    <WorkProject 
                        key={project}
                        title={project.title}
                        description={project.description}
                        gitLink={project.gitLink}
                        link={project.link}
                        img={project.img}
                        tools={project.tools.map((tool) => <label className="project--text__tool">{tool}</label>)}
                    />
                ))
            }
        </div>
    )
}

export default WorkDeveloper;