import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Header />
    <GetStarted />
    <GetInTouch />
    </>

  )
}

export default Home