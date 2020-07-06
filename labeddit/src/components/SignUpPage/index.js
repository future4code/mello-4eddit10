import React from "react";
import { useHistory } from "react-router-dom";

function SignUpPage() {
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };

  return (
    <div>
      <h3>Cadastro</h3>

      <label htmlFor="username">Nome de usuário</label>
      <input id="username" type="text" required />

      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" required />

      <label htmlFor="password">Senha</label>
      <input id="password" type="password" required />

      <button onClick={goToFeedPage}>Entrar</button>
    </div>
  );
}

export default SignUpPage;
