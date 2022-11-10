import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import './experience.css'

export const Experience = () => {
  return(
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <acticle className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </acticle>
            <acticle className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>SCSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </acticle>
            <acticle className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </acticle>
            <acticle className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </acticle>
            <acticle className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </acticle>
            <acticle className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </acticle>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
            <acticle className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </acticle>
          </div>
        </div>
      </div>
    </section>
  )
}
