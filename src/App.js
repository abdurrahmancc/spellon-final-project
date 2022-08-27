import "./App.css";
import Adverlo from "./Components/Adverlo";
import BusinessBrands from "./Components/BusinessBrands/BusinessBrands";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MeetTheTeam from "./Components/MeetTheTeam";
import Offer from "./Components/Offer";
import OtherServices from "./Components/OtherServices";
import ScaleYourBusiness from "./Components/ScaleYourBusiness";
import Schedule from "./Components/Schedule";
import "animate.css";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Adverlo />
      <BusinessBrands />
      <Offer />
      <OtherServices />
      <ScaleYourBusiness />
      <MeetTheTeam />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
