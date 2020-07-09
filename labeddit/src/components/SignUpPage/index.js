import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

function SignUpPage() {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
      username: username,
    };

    try {
      const response = await axios.post(`${baseUrl}/signup`, body);
      localStorage.setItem("token", response.data.token);
      history.push("/feed");
    } catch (e) {
      alert("Falha no login");
    }
  };

  return (
    <div>
      <h3>Cadastro</h3>

      <form>
        <label htmlFor="username">Nome de usuário</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="text"
          required
        />

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

        <button onClick={handleSignUp}>Entrar</button>
      </form>
    </div>
  );
}

export default SignUpPage;
