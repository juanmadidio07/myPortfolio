import './App.css';
import Navbar from './components/Navbar';
import Head from './components/Head';
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Head />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
