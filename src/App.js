import React, { useState } from 'react';
// import './App.css';
import Components from './components'
const { Navbar, About, Portfolio, Contact, Resume } = Components
function App() {
  const [currentNav, setNav] = useState({about:true})
  return (
    <main className="container-fluid">
      <Navbar currentNav={currentNav} setNav={setNav} />

      <section>
        {currentNav.about && <About/>}
        {currentNav.portfolio && <Portfolio/>}
        {currentNav.contact && <Contact/>}
        {currentNav.resume && <Resume/>}
      </section>
    </main>
  );
}

export default App;
