import './App.css';
// import Dashboard from './components/Dashboard/dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Landingpage/pages/Home.jsx';
import About from './components/Landingpage/pages/About.jsx';
import Contact from './components/Landingpage/pages/Contact.jsx';
import Navbar from './components/Landingpage/components/Navbar.jsx'
import Footer from './components/Landingpage/components/Footer/Footer.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
// import Profile from './components/Profile/Profile.jsx';

function App() {

  return (
    <>
    {/* <div><Dashboard /></div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
