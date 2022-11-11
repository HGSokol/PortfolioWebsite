import React, { useEffect } from 'react'
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai'
import { BiUserCircle, BiBookContent } from 'react-icons/bi'
import { MdOutlineHomeRepairService } from 'react-icons/md'

import './nav.css'

const navItems = [
  ['#',<AiOutlineHome/>],
  ['#about',<BiUserCircle/>],
  ['#experience',<BiBookContent/>],
  ['#portfolio',<MdOutlineHomeRepairService/>],
  ['#contact',<AiOutlineMessage/>],
]
/* count px to contact
 after render page calculate px + rerender
// window.pageYOffset === ?
// const f = document.querySelector('#contact')
// const toContact = window.pageYOffset+f.getBoundingClientRect().top */

export const Nav = ({active, setActive}) => {

  const activeClass = (item) => {
    setActive(item)
  }

  // useEffect(()=>{
  //   const f = document.querySelector('#contact')
  //   // console.log(f.getBoundingClientRect().top)window.pageYOffset
  //   console.log(window.pageYOffset)
  // }, [window.pageYOffset])

  return(
    <nav>
      {
        navItems.map((e,i)=> {
          return (
            <a
              key={i} 
              href={e[0]} 
              className={active === e[0]? 'active': e[0] === '#contact' /* && window.pageYOffset < f */? 'blure' : ''}
              onClick={() =>activeClass(e[0])}>{e[1]}</a>
          )
        })
      }
    </nav>
  )
}
