import React, { useEffect, useState } from 'react';
// import './App.css';
import Components from './components'
const { Header, About, Portfolio, Contact, Resume, Footer } = Components
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
      <Header currentNav={currentNav} setNav={setNav} />
      <main className='p-3 ml-lg-5'>
        <div className="row justify-content-center justify-content-lg-start">
          <h2 className="mt-1 px-2">{headerText}</h2>
        </div>

        {displayCurrentNav()}
      </main>
      <Footer />
    </>
  );
}

export default App;
