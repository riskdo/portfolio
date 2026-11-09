function Rodape() {
  const ano = new Date().getFullYear();
  return (
    <footer className="rodape">
      <p>© {ano} — Feito com React + Vite</p>
    </footer>
  );
}

export default Rodape;
