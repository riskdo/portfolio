import { useState } from "react";

function ProjetoCard({ titulo, resumo, detalhes, tecnologias, link }) {
  // useState: controla se os detalhes estão visíveis ou escondidos.
  // true = mostrando, false = escondido. Começa escondido.
  const [aberto, setAberto] = useState(false);

  return (
    <article className="projeto">
      <h3>{titulo}</h3>
      <p>{resumo}</p>

      <ul className="etiquetas">
        {tecnologias.map((tec) => (
          <li key={tec}>{tec}</li>
        ))}
      </ul>

      {/* Renderização condicional: só mostra o parágrafo se "aberto" for true */}
      {aberto && <p className="projeto__detalhes">{detalhes}</p>}

      {/* !aberto inverte o valor: true vira false e false vira true */}
      <div className="projeto__acoes">
        <button className="botao" onClick={() => setAberto(!aberto)}>
          {aberto ? "Ocultar detalhes" : "Ver detalhes"}
        </button>
        <a className="botao botao--link" href={link} target="_blank" rel="noreferrer">
          Ver no GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjetoCard;
