import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm"

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

function FeedPage() {
  useProtectedPage();
  let history = useHistory();

  const token = localStorage.getItem("token")

  const { form, onChange } = useForm ({ text: "", tittle: ""})
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    getPosts();
  }, []);

  const mySubmitCommentHandler = async(event) => {
    event.preventDefault();

    const axiosConfig = {
      headers: {
        Authorization: token,
      }
    };

    const body = {
      text: form.text,
      title: form.title,
    }

    try {
      const response = await axios.post(`${baseUrl}/posts`, form, body, axiosConfig);
      console.log(response.data.success)
      alert("Post criado com sucesso!")
    } catch (error) {
      console.log(error)
      alert("Não foi possível criar o post.")
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value)
  }

  const getPosts = async() => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      }
    };

    try {
      const response = await axios.get(`${baseUrl}/posts`, axiosConfig);
      setPosts(response.data.posts)
      console.log(response.data.posts)
    } catch(error) {
      console.log(error)
    }
  }

  const goToPost = () => {
    history.push("/post");
  };

  return (
    <div>
      <h3>Feed de posts</h3>
      <form onSubmit={mySubmitCommentHandler}>
        <label htmlFor="text">Escreva seu post</label>
        <input 
          id="text"
          type="text"
          name="text"
          value={form.text}
          minLength="3"
          required
          onChange={handleInputChange}
        />
        <button type="submit">Postar</button>
      </form>

      <hr />

      <div>
          {posts.length === 0  && <div>Carregando...</div>}
          {posts && posts.map(post => {
            return (
              <div>
                <p>{post.username}</p>
                <p>{post.text}</p>
                <p>{post.commentsCount} comentários</p>
                <button onClick={goToPost}>Detalhes post</button>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default FeedPage;
