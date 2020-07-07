import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useState } from "react";
import axios from "axios";


function PostPage() {
  useProtectedPage();
  const[comment,setComment] = useState ({
    text:""
  });

  const onChangeInput = (event) => {
    const newValue = event.target.value;
    const commentName = event.target.name;
    setComment({[commentName]:newValue});
  };


  const onSubmitComment= async (event)=> {
    event.preventDefault();
    console.log(comment);

    const body = {
      text: comment.text,
    }

    
    const postComments = 
       await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${comment.id}/comment`, body);
    
    setComment();
   
    
  };

  const renderization = () =>
  comment.map((comment) => (
    <li>{comment.text}</li>
  ));
 
  
 
  return (
    <div>
      <h3>Post</h3>
      <div>
        <p>Nome do usuário</p>
        <p>Texto do post</p>
        <p>0 comentários</p>
      </div>

      <hr />

      <form onSubmit = {onSubmitComment}>
        <label htmlFor="writeComment">Escreva seu comentário</label>
        <input onChange = {onChangeInput} id="writeComment" type="text" name = "comment" required />
        <button>Postar</button>
      </form>

      <hr />

      <div>
        <p>Nome do usuário</p>
        <p>Texto do comentário</p>
        <ul>
         {renderization}
        </ul>
      </div>
    </div>
  );
}

export default PostPage;
