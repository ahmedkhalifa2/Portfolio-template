import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Home } from './components/home/Home';
import { About } from './components/pages/About';
import { Portfolio } from './components/pages/Portfolio';
import { Services } from './components/pages/Services';
import { Testimonials } from './components/pages/Testimonials';
import { Blog } from './components/pages/Blog';
import { Contact } from './components/pages/Contact';
import { Footer } from './components/common/Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function App() {
useEffect(()=>{
  AOS.init()
  AOS.refresh()

},[])
  return (

    <>
      <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
       <Footer/>
        
      </BrowserRouter>
    </>
  )
}

export default App
