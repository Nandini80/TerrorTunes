import './App.css';
import Dashboard from './components/Dashboard/dashboard';
import QuizOfTheUnKnown from "./components/QuizOfTheUnKnown/quiz.jsx"
import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './components/Landingpage/pages/Home.jsx';
import About from './components/Landingpage/pages/About.jsx';
import Contact from './components/Landingpage/pages/Contact.jsx';
//componentes
import Navbar from './components/Landingpage/components/Navbar.jsx'
import Footer from './components/Landingpage/components/Footer/Footer.jsx';

function App() {

  return (
    <>
    {/* <div><Dashboard /></div> */}
      {/* <div><QuizOfTheUnKnown /></div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
