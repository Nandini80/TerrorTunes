import Navbar from "./Landingpage/components/Navbar";
import './LandingPagee/LandingPage.css';
import bg from '../assets/bg.jpg';

{/* <Image src={logo} width={45} className='me-2 ms-4' height={45} rounded /> */}
function LandingPage() {
  return (
    <div className="wrapper">
      <Navbar />
        <div className="middle-part">
           <div className="text-area">
              Terror Tunes 
           </div>
           <div className="image-area">
              {/* <img src={bg} alt="I will kill you" /> */}
           </div>
        </div>

        <div className="cards">

        </div>
    </div>
  )
}

export default LandingPage