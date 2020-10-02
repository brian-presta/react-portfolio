import React from 'react';
// import './App.css';
import Components from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const { Navbar, About, Portfolio, Contact, Resume } = Components
function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Resume/>
      <section className="container">
        
      </section>
    </main>
  );
}

export default App;
