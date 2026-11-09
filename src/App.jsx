import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Rodape from "./components/Rodape.jsx";
import Home from "./pages/Home.jsx";
import Projetos from "./pages/Projetos.jsx";
import Contato from "./pages/Contato.jsx";

// O App define a "moldura" do site (Navbar em cima, Rodapé embaixo)
// e, no meio, troca a página conforme o endereço (rota) da URL.
function App() {
  return (
    <>
      <Navbar />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Rodape />
    </>
  );
}

export default App;
