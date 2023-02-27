import React from 'react'
import './about.css'
import ME from '../../assets/mypic1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>0.6 years</small>
            </article>

            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>HackerRank</h5>
              <small>⭐⭐⭐</small>
              
            </article>

            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>8 </small>
            </article>
          </div>
          <p>
          As a Full-stack developer proficient in an assortment of technologies, including Java, React and MySQL Database.
          Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default about