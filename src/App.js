import React, { useEffect, useState } from 'react';
// import './App.css';
import Components from './components'
const { Navbar, About, Portfolio, Contact, Resume } = Components
function App() {
  const [currentNav, setNav] = useState("About")
  const [headerText, setHeader] = useState("About Me")
  function displayCurrentNav() {
    switch (currentNav) {
      case "About":
        return <About/>
      case "Portfolio":
        return <Portfolio/>
      case "Contact":
        return <Contact/>
      case "Resume":
        return <Resume/>
      default:
        return <About/>
    }
  }
  function displayCurrentHeader() {
    switch (currentNav) {
      case "About":
        setHeader("About Me")
        return
      case "Portfolio":
        setHeader("My Work")
        return
      case "Contact":
        setHeader("Contact Me")
        return
      case "Resume":
        setHeader("My Resume")
        return
      default:
        setHeader("About Me")
        return
    }
  }
  useEffect(displayCurrentHeader,[currentNav])

  
  return (
    <>
    <header className="container-fluid">
      <Navbar currentNav={currentNav} setNav={setNav} />
    </header>
      <main className='p-3 container'>
        <div className="row justify-content-center justify-content-lg-start">
          <h2 className="mt-1 px-2">{headerText}</h2>
        </div>

        {displayCurrentNav()}
      </main>
    </>
  );
}

export default App;
