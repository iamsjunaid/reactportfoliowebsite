import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing the user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
          </ul>
        </article>
  
        {/*End of Frontend */}
        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building and maintaining web applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Assessing the efficiency and speed of current applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing high-quality code.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing hosting environments.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing the web services and APIs.</p>
            </li>
          </ul>
        </article>
        {/*End of Backend development*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Database development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design stable, reliable and effective databases.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimize and maintain legacy systems.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Modify databases according to requests and perform tests.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solve database usage issues and malfunctions.</p>
            </li>
            {/*<li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>*/}
          </ul>
        </article>
      {/*End of Content Creation*/}
      </div>
    </section>
  )
}

export default Services