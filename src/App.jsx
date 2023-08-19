import "./App.scss";
import "./Base.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Services from "./components/Services";
import Doctors from "./components/Doctors";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Services />
      <Doctors />
    </>
  );
}

export default App;
