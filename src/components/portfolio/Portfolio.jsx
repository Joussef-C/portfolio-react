import React from 'react';
import IMG1 from '../../assets/portfolio.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/api-react.png';
import IMG4 from '../../assets/sushi-website.png';

import './portfolio.css';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Portfolio',
      img: IMG1,
      description:
        'Portfolio website using react',
      technologies: 'React | CSS ',
      link: '#home',
      github: 'https://github.com/Joussef-C/portfolio-react',
    },
    {
      id: 2,
      title: 'To-Do-App',
      img: IMG2,
      description:
        'Todo app using react ',
      technologies: 'React | CSS',
      link: 'https://todo-react-theta-ashen.vercel.app/',
      github: 'https://github.com/Joussef-C/todo-react',
    },
    {
      id: 3,
      title: 'Cryptocurrency Prices API',
      img: IMG3,
      description: 'List of top 100 Cryptocurrency Prices using CoinGecko API',
      technologies: 'React | Axion',
      link: 'https://api-react-swart.vercel.app/',
      github: 'https://github.com/Joussef-C/api-react',
    },
    {
      id: 4,
      title: 'Sushi Restaurant',
      img: IMG4,
      description:
        'Responsive restaurant website',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://sushi-website-five.vercel.app/',
      github: 'https://github.com/Joussef-C/sushi-website',
    },


  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub <FaGithub/>
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
