import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About//About";
import Skill from "./Components/Skill/Skill";
import Services from "./Components/Services/Services";
import Qualification from "./Components/Qualification/Qualification";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skill />
        <Services />
        <Qualification />
      </main>
    </>
  );
}

export default App;
