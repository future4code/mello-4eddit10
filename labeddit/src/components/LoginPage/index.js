import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoginSignUpContainer, ImgBox, Input, Label, Tittle, ButtonSignIn, ButtonSignUp, LoginBox, LoginForm } from "./../../styles";

import Mascote from "../../imgs/mascote.png";

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
      <ImgBox>
        <img width="200" src={Mascote} alt="Logo Menor"/>
      </ImgBox>
      <LoginBox>
        <Tittle>Entrar no Labeddit</Tittle>
        <LoginForm>
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
          <ButtonSignIn onClick={handleLogin}>Entrar</ButtonSignIn>
        </LoginForm>
        <ButtonSignUp onClick={goToSignUpPage}>Inscrever-se no Labeddit</ButtonSignUp>
      </LoginBox>
    </LoginSignUpContainer>
  );
}

export default LoginPage;
