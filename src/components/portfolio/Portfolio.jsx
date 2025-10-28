import React, { useState } from 'react';
import IMG1 from '../../assets/portfolio.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/api-react.png';
import IMG4 from '../../assets/sushi-website.png';
import IMG5_1 from '../../assets/Rental estate (1).png';
import IMG5_2 from '../../assets/Rental estate (2).png';
import IMG5_3 from '../../assets/Rental estate (3).png';
import IMG5_4 from '../../assets/Rental estate (4).png';
import IMG5_5 from '../../assets/Rental estate (5).png';
import IMG6 from '../../assets/instapay.png';

import './portfolio.css';
import { FaGithub } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="portfolio__item-image-carousel">
      <img src={images[currentIndex]} alt={`${title} - ${currentIndex + 1}`} />
      {images.length > 1 && (
        <>
          <button className="carousel-btn carousel-btn-prev" onClick={goToPrevious}>
            <IoIosArrowBack />
          </button>
          <button className="carousel-btn carousel-btn-next" onClick={goToNext}>
            <IoIosArrowForward />
          </button>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Real Estate Rental Platform',
      img: IMG5_1,
      images: [IMG5_1, IMG5_2, IMG5_3, IMG5_4, IMG5_5],
      description:
        'Full-stack real estate website for renting properties with an admin control panel for managing property listings. Features include property browsing, advanced search, and complete CRUD operations for administrators.',
      technologies: 'React | TypeScript | Tailwind CSS | MongoDB | Amazon S3',
      link: 'https://webdev-production-5c45.up.railway.app/',
      github: '#',
    },
    {
      id: 2,
      title: 'Instapay',
      img: IMG6,
      description:
        'Modern payment processing application with intuitive user interface and secure transaction handling',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://joussef-c.github.io/Instapay/',
      github: 'https://github.com/Joussef-C/Instapay',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      description:
        'Todo app using react ',
      technologies: 'React | CSS',
      link: 'https://todo-react-theta-ashen.vercel.app/',
      github: 'https://github.com/Joussef-C/todo-react',
    },
    {
      id: 4,
      title: 'Cryptocurrency Prices API',
      img: IMG3,
      description: 'List of top 100 Cryptocurrency Prices using CoinGecko API',
      technologies: 'React | Axion',
      link: 'https://api-react-swart.vercel.app/',
      github: 'https://github.com/Joussef-C/api-react',
    },
    {
      id: 5,
      title: 'Sushi Restaurant',
      img: IMG4,
      description:
        'Responsive restaurant website',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://sushi-website-five.vercel.app/',
      github: 'https://github.com/Joussef-C/sushi-website',
    },
    {
      id: 6,
      title: 'Portfolio',
      img: IMG1,
      description:
        'Portfolio website using react',
      technologies: 'React | CSS ',
      link: '#home',
      github: 'https://github.com/Joussef-C/portfolio-react',
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
              {pro.images ? (
                <ImageCarousel images={pro.images} title={pro.title} />
              ) : (
                <img src={pro.img} alt={pro.title} />
              )}
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
                GitHub <FaGithub />
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
