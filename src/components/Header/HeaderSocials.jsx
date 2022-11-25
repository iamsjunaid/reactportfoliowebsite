import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/junaid-syed-058b2779" rel="noopener noreferrer"  target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/iamsjunaid" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
        <a href="https://www.hackerrank.com/sjunaid626" rel="noopener noreferrer" target="_blank"><FaHackerrank/></a>
    </div>
  )
}

export default HeaderSocials