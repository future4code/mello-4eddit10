import styled from "styled-components";

/* GLOBAL STYLES */

export const GlobalStyle = styled.div`
  background-color: #e6e7e8;
  font-family: Roboto, sans-serif;
`;
/* STANDARD STYLES */

export const LoginSignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const StandardInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  height: 4vh;
  background-color: transparent;
  padding-left: 10px;
  width: 20vw;

  :focus {
    border-bottom: 1px solid #ff5700;
  }
`;

export const StandardButton = styled.button`
  outline: none;
  width: 10vw;
  height: 5vh;
  background-color: #ff5700;
  border-radius: 5vw;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;
  color: white;

  :hover {
    background-color: #55acef;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    color: white;
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const StandardSecondButton = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`;

/* LOGIN AND SIGNUP PAGE */

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
    color: #ff5700;
  }
`;

export const Input = styled(StandardInput)`
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
`;

export const ButtonSignIn = styled(StandardButton)`
  position: absolute;
  top: 120%;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
`;

export const ButtonSignIn2 = styled(ButtonSignIn)`
  top: 155%;
`;

export const ButtonSignUp = styled(StandardSecondButton)`
  position: absolute;
  top: 140%;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
`;

/* FEED AND POST PAGE */

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e6e7e8;
`;

export const Grid = styled.div`
  margin-top: 32px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2vw;
`;

/* HEADER */

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  background-color: #fcfcfc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  justify-content: center;
  align-items: center;

  padding: 16px;

  width: 22vw;
  height: 44vh;

  border-radius: 16px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderButton = styled(StandardButton)`
  margin: 10px 5px 10px 0px;
  font-size: 14px;
  width: 8vw;
  height: 4vh;
`;

export const LogoutButton = styled(StandardButton)`
  width: 8vw;
  height: 4vh;
  background-color: white;
  border: 2px solid #ff5700;
  font-size: 14px;
  color: black;
  margin-top: 4px;

  :hover {
    background-color: #55acef;
    border: none;
    color: white;
  }
`;

export const HeaderCleanButton = styled(StandardSecondButton)``;

export const HeaderInput = styled(StandardInput)`
  width: 15vw;
  margin-top: 16px;
`;

/* CREATE POST */

export const PostContainer = styled.div`
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  padding: 32px;

  width: 40vw;
`;

export const HeaderImg = styled.img`
  width: 140px;
  height: 140px;
`;

export const CreatePostForm = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  margin-bottom: 24px;
`;

export const Posts = styled.div`
  border-bottom: 1px solid black;
`;

export const InputPost = styled(StandardInput)`
  margin: 10px;
`;

export const InputPostContent = styled(InputPost)`
  width: 36vw;
  height: 8vh;
`;

export const PostButton = styled(StandardButton)`
  margin: 10px;
  width: 8vw;
  height: 4vh;
`;

/* LISTA DE POSTS */

export const PostTitle = styled.span`
  font-weight: bold;
`;

export const PostUsername = styled.span`
  color: #8a8a8a;
`;

export const DetailsBox = styled.div`
  padding-bottom: 12px;

  display: flex;
  justify-content: flex-end;
`;

/* STYLES POST PAGE */

export const PostConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-family: sans-serif;
  background-color: #f0f0f0;
`;
export const LogoConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px gray solid;
  height: 30%;
  width: 20%;
  padding: 5%;
  margin: 10%;
  margin-right: 5%;
  background-color: #fcfcfc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const CommentConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 30%;
  width: 30%;
  text-align: center;

  margin: 10%;
  margin-left: 5%;
`;
/* export const ImgBox = styled.div`
  display:flex;
  justify-content: center;
  align-content:center;

`; */

export const ButtonFeed = styled(StandardButton)`
  margin: 16px 0px;
`;

export const ShareLogos = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CommentPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 20%;
  width: 100%;
  text-align: center;

  background-color: #fcfcfc;
`;

export const CommentWrite = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 20%;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const CommentsList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 10%;
  width: 100%;
  margin-bottom: 10px;
  list-style-type: none;
  background-color: #fcfcfc;
  border-bottom: 1px solid black;
`;
