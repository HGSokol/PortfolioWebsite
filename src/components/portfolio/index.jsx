import React from 'react'

import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'
import './portfolio.css'

const data = [
  {
    image: img1,
    title: 'Pizza Store',
    github: 'https://github.com/HGSokol/pizzaStore'
  },
  {
    image: img2,
    title: 'Sneakers Store',
    github: 'https://github.com/HGSokol/SneakersStore'
  },
  {
    image: img3,
    title: 'Github Finder',
    github: 'https://github.com/HGSokol/githubFinder'
  },
  {
    image: img4,
    title: 'React Marvel',
    github: 'https://github.com/HGSokol/hookReactMarvel'
  },
  {
    image: img5,
    title: 'Pizza Store',
    github: 'https://github.com/HGSokol/pizzaStore'
  },
  {
    image: img6,
    title: 'Pizza Store',
    github: 'https://github.com/HGSokol/pizzaStore'
  },
]

export const Portfolio = () => {
  return(
    <section id='portfolio'>
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map((e,i) => {
            return (
              <article className='portfolio__item' key={i}>
                <div className="portfolio__item-image">
                  <img src={e.image} alt={e.title}/>
                </div>
                <h3>{e.title}</h3>
                <a href={e.github} className='btn' target='_blank' rel="noreferrer" >Github</a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
