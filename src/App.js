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
    <main className="container-fluid">
      <Navbar currentNav={currentNav} setNav={setNav} />

      <section>
        {displayCurrentNav()}
      </section>
    </main>
  );
}

export default App;
