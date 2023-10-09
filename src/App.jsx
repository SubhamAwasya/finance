import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default App;
