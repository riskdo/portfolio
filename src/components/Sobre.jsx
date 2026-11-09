function Sobre({ interesses, objetivoAcademico, objetivoProfissional }) {
  return (
    <section className="secao">
      <h2 className="secao__titulo">Sobre mim</h2>

      <div className="sobre">
        <div className="sobre__bloco">
          <h3>Interesses</h3>
          <ul className="etiquetas">
            {interesses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="sobre__bloco">
          <h3>Objetivo acadêmico</h3>
          <p>{objetivoAcademico}</p>
        </div>

        <div className="sobre__bloco">
          <h3>Objetivo profissional</h3>
          <p>{objetivoProfissional}</p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
