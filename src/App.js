import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Experts from './components/Experts';
import NewsLetter from './components/NewsLetter';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Experts/>
      <NewsLetter/>
      <Plans/>
      <Footer/>
    </div>
  );
}

export default App;
