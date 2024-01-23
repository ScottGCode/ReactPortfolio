import './App.css';
import About from './components/About'; 
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navigation';
import Project from './components/Project';

function App() {
  return (
    <div className="bucket-app">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
