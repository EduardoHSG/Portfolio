import { React, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Inicio from "./components/Inicio/Inicio";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato";
import "./App.css";

function App() {
  const [start, setStart] = useState(<Inicio />);

  const render = (e) => {
    switch (e) {
      case "start":
        setStart(<Inicio />);
        break;
      case "projects":
        setStart(<Projetos />);
        break;
      case "contact":
        setStart(<Contato />);
        break;
    }
  };

  return (
    <div className="App">
      <Navbar render={render} />
      {start}
      <Footer />
    </div>
  );
}

export default App;
