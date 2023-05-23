import './App.css';
// import Header from './components/Header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Myskills from './components/myskills';
import Teams  from './components/teams';
import Contact from './components/contact';
import Footer from './components/footer';
import Backtotop from './components/backtotop';
function App() {
  return (
    <div className="bg-white">
      <Home />
      <About />
      <Services />
      <Myskills />
      <Teams />
      <Contact />
      <Footer />
      <Backtotop />
      
      

      


    </div>
  );
}

export default App;
