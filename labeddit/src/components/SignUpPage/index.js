import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoginSignUpContainer, ImgBox, LoginBox2, LoginForm, Tittle, Label, Input, ButtonSignIn2 } from "./../../styles";
import MascoteLogo from "../../imgs/mascote-logo.png";

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
    <LoginSignUpContainer>
      <ImgBox>
        <img width="400" src={MascoteLogo} alt="Logo Menor"/>
      </ImgBox>
      <LoginBox2>
        <Tittle>Criar sua conta</Tittle>

        <LoginForm>
          <Label htmlFor="username">Nome de usuário</Label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            required
          />

          <Label htmlFor="email">E-mail</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            required
          />

          <Label htmlFor="password">Senha</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            required
          />

          <ButtonSignIn2 onClick={handleSignUp}>Entrar</ButtonSignIn2>
        </LoginForm>
      </LoginBox2>
    </LoginSignUpContainer>
  );
}

export default SignUpPage;
