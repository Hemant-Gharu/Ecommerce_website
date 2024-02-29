import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
