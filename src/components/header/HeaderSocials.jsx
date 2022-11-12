import React from 'react'
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs'

import './header.css'

export const HeaderSocials = () => {
  return(
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/gleb-sokolov-b045b2229/' target='_blank' rel="noreferrer" className='header_links'><BsLinkedin/></a>
      <a href='https://t.me/NinjsWay' target='_blank' rel="noreferrer" className='header_links'><BsTelegram/></a>
      <a href='https://github.com/HGSokol' target='_blank' rel="noreferrer" className='header_links'><BsGithub/></a>
    </div>
  )
}
