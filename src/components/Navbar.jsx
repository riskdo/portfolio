import { NavLink } from "react-router-dom";
import { perfil } from "../data/dados.js";

// NavLink é como o <a>, mas não recarrega a página
// e sabe qual link está "ativo" (a página atual).
function Navbar() {
  return (
    <header className="navbar">
      <span className="navbar__logo">{perfil.nome.split(" ")[0]}<span>.</span></span>
      <nav className="navbar__links">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
