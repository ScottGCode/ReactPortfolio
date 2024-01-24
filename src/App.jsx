import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About'; 
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navigation';
import Project from './components/Project';

function App() {
  return (
    <Router>
    <div className="bucket-app">
      <Routes>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
      </Routes>
      <Header />
      <About />
      <Project />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
