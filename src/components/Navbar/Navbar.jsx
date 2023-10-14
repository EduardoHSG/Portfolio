import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

export default function Navbar({ render }) {
  const [menu, setMenu] = useState(false);

  const toggleNavbar = () => {
    setMenu(!menu);
    const navResp = document.querySelector(".options");
    navResp.classList.toggle("optionsOpen");
  };

  const handleClick = (e) => {
    const event = e.target.id;
    render(event);
  };

  const doubleFunc = function (e) {
    toggleNavbar();
    handleClick(e);
  };

  return (
    <header className="navContainer">
      <nav className="navigation">
        <h2 className="name" id="start" onClick={handleClick}>
          {"<Eduardo/>"}
        </h2>
        <ul className="options">
          <li>
            <a href="#" className="select" id="start" onClick={doubleFunc}>
              Início
            </a>
          </li>
          <li>
            <a href="#" className="select" id="projects" onClick={doubleFunc}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#" className="select" id="contact" onClick={doubleFunc}>
              Contato
            </a>
          </li>
        </ul>
        <button className="openClose" onClick={toggleNavbar}>
          <i>{menu === false ? <AiOutlineMenu /> : <AiOutlineClose />}</i>
        </button>
      </nav>
    </header>
  );
}
