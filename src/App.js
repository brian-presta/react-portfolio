import React from 'react';
import './App.css';
import Components from './components'
const { Navbar, About, Portfolio, Contact, Resume } = Components
function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Resume/>
    </main>
  );
}

export default App;
