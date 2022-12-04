import React from 'react';
import './Project.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/portfolio6.jpg'
import IMG3 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Shopper e-commerce website',
    github: 'https://github.com/fahim01216/Shopper-Backend',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Smart Contact Manager',
    github: 'https://github.com/fahim01216/Smart-Contact-Manager',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  {
    id: 3,
    image: IMG3,
    title: 'To Do List',
    github: 'https://github.com/fahim01216/To-Do-List',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Tic Tac Toe',
    github: 'https://github.com/fahim01216/Tic-Tac-Toe',
    demo: 'https://dribbble.com/Alien_pixels'
  }
]



const Portfolio = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt='' />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a href={github} className='btn' target={'_blank'}>Github</a>
                <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>       
              </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio