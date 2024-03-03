import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HowItWorks from "./component/HowItWorks";
import Art from "./component/art";
import Cta from "./component/Cta";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Art />
      <Cta />
      <div className="border-t border-gray-100 w-screen h-0"></div>
      <Footer />
    </>
  );
}

export default App;
