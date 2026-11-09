import { useState } from "react";

// Este componente RECEBE dados via props (nome, cargo, descricao, foto).
// Ele não sabe de onde os dados vêm: quem decide é o componente "pai" (Home).
function Perfil({ nome, cargo, descricao, foto }) {
  // useState: guarda se a foto falhou ao carregar.
  // Se falhar, mostramos as iniciais do nome no lugar.
  const [fotoFalhou, setFotoFalhou] = useState(false);

  const iniciais = nome
    .split(" ")
    .map((palavra) => palavra[0])
    .slice(0, 2)
    .join("");

  return (
    <section className="perfil">
      <div className="perfil__texto">
        <p className="perfil__ola">Olá, eu sou</p>
        <h1>{nome}</h1>
        <h2>{cargo}</h2>
        <p>{descricao}</p>
      </div>

      <div className="perfil__foto">
        {fotoFalhou ? (
          <div className="perfil__iniciais">{iniciais}</div>
        ) : (
          <img src={foto} alt={`Foto de ${nome}`} onError={() => setFotoFalhou(true)} />
        )}
      </div>
    </section>
  );
}

export default Perfil;
