import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };

  const goToSignUpPage = () => {
    history.push("/signup");
  };

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" required />

      <label htmlFor="password">Senha</label>
      <input id="password" type="password" required />
      <button onClick={goToFeedPage}>Entrar</button>
      <button onClick={goToSignUpPage}>Cadastrar</button>
    </div>
  );
}

export default LoginPage;
