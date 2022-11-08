import React from 'react'

import { CallToAction } from './CallToAction'
import { HeaderSocials } from './HeaderSocials'
import ME from '../../assets/me.png'

import './header.css'

export const Header = ({setActive}) => {

  const activeClass = (item) => {
    setActive(item)
  }

  return(
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Gleb Sokolov</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CallToAction setActive={setActive}/>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt='me'/>
        </div>
        <a href='#contact' className='scroll__down' onClick={() => activeClass('#contact') }>Scroll Down</a>
      </div>
    </header>
  )
}
