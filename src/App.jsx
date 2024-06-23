import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About//About";
import Skill from "./Components/Skill/Skill";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skill />
      </main>
    </>
  );
}

export default App;
