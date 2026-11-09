import { useState } from "react";

function Contato() {
  // Um useState para cada campo do formulário + um para a mensagem de sucesso.
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function aoEnviar(evento) {
    evento.preventDefault(); // impede a página de recarregar
    setEnviado(true);
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <section className="secao">
      <h2 className="secao__titulo">Contato</h2>

      <p className="contato__links">
        Você também pode me encontrar no{" "}
        <a href="https://github.com/riskdo" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>

      <form className="formulario" onSubmit={aoEnviar}>
        <label>
          Nome
          <input value={nome} onChange={(e) => setNome(e.target.value)} required />
        </label>

        <label>
          E-mail
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Mensagem
          <textarea rows="5" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required />
        </label>

        <button className="botao" type="submit">Enviar</button>

        {enviado && (
          <p className="formulario__sucesso">
            Mensagem enviada! (simulação: nada é enviado de verdade)
          </p>
        )}
      </form>
    </section>
  );
}

export default Contato;
