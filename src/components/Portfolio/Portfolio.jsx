import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/crm.jpg'
import IMG2 from '../../assets/stopwatch.png'
import IMG3 from '../../assets/analysis.png'
import IMG4 from '../../assets/Quickly.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title:'Customer Relationship Management (CRM) Web App',
    github: 'https://github.com/iamsjunaid/React-And-Spring-Boot-Web-App',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title:'Stopwatch Javascript project',
    github: 'https://github.com/iamsjunaid/Stopwatch-Javascript',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-visualization'
  },
  {
    id: 3,
    image: IMG3,
    title:'Analysis of users behaviour in structured ecommerce website',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-visualization'
  },
  {
    id: 4,
    image: IMG4,
    title:'Quickly News App',
    github: 'https://github.comhttps://github.com/iamsjunaid/Quickly-News-React.git',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-visualization'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
            <article key={id} className='portfolio__items'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              {/*<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>*/}
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