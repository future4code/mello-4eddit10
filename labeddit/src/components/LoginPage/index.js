import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoginSignUpContainer, LoginBox, LoginForm } from "./../../styles";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

function LoginPage() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, body);
      localStorage.setItem("token", response.data.token);
      history.push("/feed");
    } catch (e) {
      alert("Falha no login");
    }
  };

  const goToSignUpPage = () => {
    history.push("/signup");
  };

  return (
    <LoginSignUpContainer>
      <LoginBox>
        <h2>Login</h2>
        <LoginForm>
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            required
          />
          <button onClick={handleLogin}>Entrar</button>
        </LoginForm>
        <button onClick={goToSignUpPage}>Cadastrar</button>
      </LoginBox>
    </LoginSignUpContainer>
  );
}

export default LoginPage;
