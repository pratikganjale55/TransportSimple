
import './App.css';
import About from './components/about/About';
import Acheivment from './components/acheivment/Acheivment';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Plan from './components/plans/Plan';



function App() {
  return (
  <>
    <Header/>
    <Hero/>
    {/* <About/> */}
    <Plan/>
    <Info/>
    <Acheivment/>
    <Footer/>
  </>

  );
}

export default App;

