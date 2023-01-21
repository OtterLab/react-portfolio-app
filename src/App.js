import React from 'react';
import NavigationBar from './components/NavigationBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* Navigation bar */}
      <NavigationBar/>

      {/* Home page */}
      <Home/>

      {/* About page */}
      <About/>

      {/* Skills page */}
      <Skills/>

      {/* Projects page */}
      <Projects/>

      {/* Contact page */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
