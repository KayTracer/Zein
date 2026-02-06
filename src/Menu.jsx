import { useState } from "react";

export default function Menu({ produtos }) {
  const [quantity, setQuantity] = useState({});

  function alterarQuantidade(id, valor) {
    setQuantity((prev) => ({
      ...prev,
      [id]: Number(valor),
    }));
  }

  return (
    <div className="container">
      {produtos.map((produto) => (
        <div className="item" key={produto.id}>
          <img src={produto.img} alt={produto.nome} />

          <h3>{produto.nome}</h3>

          <p>R$ {produto.preco.toFixed(2)}</p>

          <button onClick={() => adicionar(produto.id)}>+Carrinho</button>
        </div>
      ))}
    </div>
  );
}
