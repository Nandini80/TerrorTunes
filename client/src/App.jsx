import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { getUserService } from './services/user';
import PersonDash from './components/PersonDash.jsx';
import BandDash from './components/BandDash.jsx';
import ProviderProfile from './components/BandInfo.jsx';
import PersonProf from './components/PersonInfo.jsx';
import CollabPerson from './components/CollaborationPerson.jsx';
import CollabBand from './components/CollaborationBand.jsx';
import LandingPage from './components/LandingPage.jsx';
import GamesCard from './components/LandingPagee/GamesCard.jsx';
import Quiz from './components/QuizOfTheUnKnown/quiz.jsx';

function App() {

  const [user, setUser] = useState({});
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, []);

    const getUser = async () => {
        try {
            const res = await getUserService();
            if (res.data.status) 
            setUser(res.data.user);     
        }
        catch (err) {
            console.log(err);
        }
    };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Signup' element={token ?<Navigate to={user.desig === "person" ? "/person":"/band"} /> :<Signup />} />
          <Route path='/login' element={token ?<Navigate to={user.desig === "person" ? "/person":"/band"} /> :<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/person' element={<PersonDash></PersonDash>}></Route>
          <Route path='/band' element={<BandDash></BandDash>}></Route>
          <Route path='/BandProfile' element={<ProviderProfile></ProviderProfile>}></Route>
          <Route path='/PersonProfile' element={<PersonProf></PersonProf>}></Route>
          <Route path='/collaborationPerson' element={<CollabPerson></CollabPerson>}></Route>
          <Route path='/collaborationBand' element={<CollabBand></CollabBand>}></Route>
          <Route path='/gamescard' element={<GamesCard></GamesCard>}></Route>
          <Route path='/quiz' element={<Quiz></Quiz>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App