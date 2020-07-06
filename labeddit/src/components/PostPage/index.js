import React from "react";

function PostPage() {
  return (
    <div>
      <h3>Post</h3>
      <div>
        <p>Nome do usuário</p>
        <p>Texto do post</p>
        <p>0 comentários</p>
      </div>

      <hr />

      <form>
        <label htmlFor="writeComment">Escreva seu comentário</label>
        <input id="writeComment" type="text" required />
        <button>Postar</button>
      </form>

      <hr />

      <div>
        <p>Nome do usuário</p>
        <p>Texto do comentário</p>
      </div>
    </div>
  );
}

export default PostPage;
