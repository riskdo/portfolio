import Perfil from "../components/Perfil.jsx";
import Habilidades from "../components/Habilidades.jsx";
import Sobre from "../components/Sobre.jsx";
import { perfil, habilidades, sobre } from "../data/dados.js";

// A página Home apenas MONTA a tela juntando componentes
// e passando os dados para eles por props.
function Home() {
  return (
    <>
      <Perfil
        nome={perfil.nome}
        cargo={perfil.cargo}
        descricao={perfil.descricao}
        foto={perfil.foto}
        github={perfil.github}
      />
      <Habilidades dados={habilidades} />
      <Sobre
        interesses={sobre.interesses}
        objetivoAcademico={sobre.objetivoAcademico}
        objetivoProfissional={sobre.objetivoProfissional}
      />
    </>
  );
}

export default Home;
