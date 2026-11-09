import ProjetoCard from "../components/ProjetoCard.jsx";
import { projetos } from "../data/dados.js";

function Projetos() {
  return (
    <section className="secao">
      <h2 className="secao__titulo">Projetos e experiências</h2>

      <div className="grade grade--projetos">
        {/* .map percorre a lista e cria um ProjetoCard para cada projeto */}
        {projetos.map((projeto) => (
          <ProjetoCard
            key={projeto.id}
            titulo={projeto.titulo}
            resumo={projeto.resumo}
            detalhes={projeto.detalhes}
            tecnologias={projeto.tecnologias}
            link={projeto.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
