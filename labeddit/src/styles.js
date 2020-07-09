import styled from "styled-components";

export const LoginSignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #E6E7E8;
  width: 100vw;
  height: 100vh;
  font-family: Roboto;
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 8%;
`;

export const LoginBox = styled.div`
  position: absolute;
  top: 40%;
  width: 30%;
  height: 30%;

  display: flex;
  flex-direction: column;
`;

export const LoginBox2 = styled.div`
  position: absolute;
  top: 30%;
  width: 30%;
  height: 30%;

  display: flex;
  flex-direction: column;
`;

export const Tittle = styled.h2`
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 10px;
  margin-left: 4.5vw;

  :focus {
    color: #FF5700;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  height: 4vh;
  background-color: transparent;
  padding-left: 10px;
  width: 20vw;

  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;

  :focus{
    border-bottom: 1px solid #FF5700;
  }
`;

export const ButtonSignIn = styled.button`
  outline: none;
  width: 10vw;
  height: 5vh;
  background-color: #FF5700;
  border-radius: 5vw;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;

  position: absolute;
  top: 120%;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;

  :hover {
    background-color: #55ACEF;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonSignIn2 = styled.button`
  outline: none;
  width: 10vw;
  height: 5vh;
  background-color: #FF5700;
  border-radius: 5vw;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;

  position: absolute;
  top: 155%;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;

  :hover {
    background-color: #55ACEF;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonSignUp = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  
  position: absolute;
  top: 140%;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
`;