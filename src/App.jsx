import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About'; 
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navigation';
import Project from './components/Project';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Router>
    <div className="react-app">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
