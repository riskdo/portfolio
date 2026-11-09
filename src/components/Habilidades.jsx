import { useState } from "react";
import CartaoHabilidade from "./CartaoHabilidade.jsx";

// "dados" chega por props: um objeto com as categorias e suas habilidades.
function Habilidades({ dados }) {
  // Object.keys(dados) => ["Linguagens", "Ferramentas", "Aprendendo"]
  const categorias = Object.keys(dados);

  // useState: guarda qual ABA está selecionada.
  // Começa com a primeira categoria. Quando clicamos numa aba,
  // chamamos setAbaAtiva e o React redesenha o componente.
  const [abaAtiva, setAbaAtiva] = useState(categorias[0]);

  return (
    <section className="secao">
      <h2 className="secao__titulo">Habilidades</h2>

      <div className="abas">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={categoria === abaAtiva ? "aba aba--ativa" : "aba"}
            onClick={() => setAbaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="grade">
        {dados[abaAtiva].map((habilidade) => (
          <CartaoHabilidade
            key={habilidade.nome}
            nome={habilidade.nome}
            nivel={habilidade.nivel}
            icone={habilidade.icone}
          />
        ))}
      </div>
    </section>
  );
}

export default Habilidades;
