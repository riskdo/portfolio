// Componente pequeno e REUTILIZÁVEL: é usado várias vezes,
// uma para cada habilidade, apenas mudando as props.
function CartaoHabilidade({ nome, nivel, icone }) {
  return (
    <div className="cartao-habilidade">
      <span className="cartao-habilidade__icone">{icone}</span>
      <strong>{nome}</strong>
      <small>{nivel}</small>
    </div>
  );
}

export default CartaoHabilidade;
