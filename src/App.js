import "./App.css";
import Adverlo from "./Components/Adverlo";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Offer from "./Components/Offer";
import ScaleYourBusiness from "./Components/ScaleYourBusiness";
import Schedule from "./Components/Schedule";
import "animate.css";
import useBodyScrollLock from "./Components/hooks/useBodyScrollLock";

function App() {
  const [isLock, toggle] = useBodyScrollLock();

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled < 3000 || scrolled > 3000) {
      return;
    } else if (scrolled === 3000) {
      toggle(true);
      setTimeout(() => {
        toggle(false);
      }, 1000);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="bg-white">
      <Header />
      <Adverlo />
      <Offer />
      {/* <button className="btn btn-primary" onClick={() => toggle(!isLock)}>
        {isLock ? "unlock" : "lock"}
      </button> */}
      {/* <OtherServices /> */}
      <ScaleYourBusiness />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
