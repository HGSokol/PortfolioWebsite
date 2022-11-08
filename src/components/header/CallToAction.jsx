import React from 'react'

// import CV from '../../assets/cv.pdf'
import './header.css'

export const CallToAction = ({setActive}) => {
  const activeClass = (item) => {
    setActive(item)
  }
  return(
    <div className='cta'>
      <a href='' /* {CV} */ /* download */ className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary' onClick={() => activeClass('#contact') }>Let's Talk</a>
    </div>
  )
}
