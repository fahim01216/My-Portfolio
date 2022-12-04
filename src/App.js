import './App.css';
import React from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';

function App() {
  return (
  <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Project />
    <Contact />
    <Footer />
  </>
  );
}

export default App;
