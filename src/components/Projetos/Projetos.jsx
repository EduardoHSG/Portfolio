import React from "react";
import buscadorCep from "./img/buscador-de-cep.jpg";
import geradorSenha from "./img/gerador-de-senha.jpg";
import "./Projetos.css";

export default function Projetos() {
  return (
    <main className="projectContainer">
      <section className="projects">
        <div className="card card1">
          <img src={geradorSenha} alt="Gerador de senha" className="image" />
          <h1 className="title title 1">Projeto 1</h1>
          <a
            href="https://geradordesenha-six.vercel.app/"
            className="access"
            target="_blank"
          >
            Acessar
          </a>
        </div>
        <div className="card card2">
          <img src={buscadorCep} alt="Buscador de cep" className="image" />
          <h1 className="title title 2">Projeto 2</h1>
          <a
            href="https://buscador-de-cep-update.vercel.app/"
            className="access"
            target="_blank"
          >
            Acessar
          </a>
        </div>
      </section>

      <h3 className="soon">Em breve novos projetos</h3>
    </main>
  );
}
