import React from "react";
import { useHistory } from "react-router-dom";
//import { useProtectedPage } from "./../../useProtectedPage";

function FeedPage() {
  //useProtectedPage();
  let history = useHistory();

  const goToPost = () => {
    history.push("/post");
  };

  return (
    <div>
      <h3>Feed de posts</h3>
      <form>
        <label htmlFor="writePost">Escreva seu post</label>
        <input id="writePost" type="text" required />
        <button>Postar</button>
      </form>

      <hr />

      <div>
        <p>Nome do usuário</p>
        <p>Texto do post</p>
        <p>0 comentários</p>
      </div>
      <button onClick={goToPost}>Detalhes post</button>
    </div>
  );
}

export default FeedPage;
