import React, { useState } from 'react';
// import './App.css';
import Components from './components'
const { Navbar, About, Portfolio, Contact, Resume } = Components
function App() {
  const [currentNav, setNav] = useState("About")
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
  return (
    <>
    <header className="container-fluid">
      <Navbar currentNav={currentNav} setNav={setNav} />
    </header>
      <main className='container'>
        <div className="row justify-content-center justify-content-lg-start">
          <h2 className="mt-1 px-2">{currentNav}</h2>
        </div>

        {displayCurrentNav()}
      </main>
    </>
  );
}

export default App;
