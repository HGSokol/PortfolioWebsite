import React from 'react'

import { Header } from './components/header'
import { Nav } from './components/nav'
import { About } from './components/about'
import { Experience } from './components/experience'
import { Services } from './components/services'
import { Portfolio } from './components/portfolio'
import { Testimonials } from './components/testimonials'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

function App() {
  const [active, setActive] = React.useState('#')

  return (
    <>
      <Header setActive={setActive}/>
      <Nav active={active} setActive={setActive}/>
      <About setActive={setActive}/>
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;