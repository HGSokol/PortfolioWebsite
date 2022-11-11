import React from 'react'

import { Header } from './components/header'
import { Nav } from './components/nav'
import { About } from './components/about'
import { Experience } from './components/experience'
import { Portfolio } from './components/portfolio'
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
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;