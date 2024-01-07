import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Map from './Components/Map';
import { BrowserRouter, Route ,Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        <Route path='/Map' element={<Map/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
