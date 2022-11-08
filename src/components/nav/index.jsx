import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai'
import { BiUserCircle, BiBookContent } from 'react-icons/bi'
import { MdOutlineHomeRepairService } from 'react-icons/md'

import './nav.css'

const navItems = [
  ['#',<AiOutlineHome/>],
  ['#about',<BiUserCircle/>],
  ['#experience',<BiBookContent/>],
  ['#services',<MdOutlineHomeRepairService/>],
  ['#contact',<AiOutlineMessage/>],
]

export const Nav = ({active, setActive}) => {

  const activeClass = (item) => {
    setActive(item)
  }

  return(
    <nav>
      {
        navItems.map((e,i)=> {
          return (
            <a
              key={i} 
              href={e[0]} 
              className={active === e[0]? 'active': ''}
              onClick={() =>activeClass(e[0])}>{e[1]}</a>
          )
        })
      }
    </nav>
  )
}
