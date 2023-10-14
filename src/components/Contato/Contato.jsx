import React from "react";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoGmail,
} from "react-icons/bi";

import "./Contato.css";

export default function Contato() {
  return (
    <main className="contactContainer">
      <ul className="contactList">
        <li className="contacts">
          <i className="logo">
            <BiLogoGithub className="github" />
          </i>
          <a
            href="https://github.com/EduardoHSG"
            className="link"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className="contacts">
          <i className="logo">
            <BiLogoLinkedinSquare className=" linkedin" />
          </i>
          <a
            href="https://www.linkedin.com/in/eduardo-gomes11/"
            className="link"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li className="contacts">
          <i className="logo">
            <BiLogoGmail className=" gmail" />
          </i>
          <a
            href="mailto:eduardogomes3365@gmail.com"
            className="link"
            target="_blank"
          >
            Gmail
          </a>
        </li>
      </ul>
    </main>
  );
}
