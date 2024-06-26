import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About//About";
import Skill from "./Components/Skill/Skill";
import Services from "./Components/Services/Services";
import Qualification from "./Components/Qualification/Qualification";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/scrollUp/ScrollUp";
import Work from "./Components/Work/Work";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Services />
        <Qualification />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
    </>
  );
}

export default App;
