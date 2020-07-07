import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

function FeedPage() {
  useProtectedPage();
  let history = useHistory();

  const { postId } = useParams();

  const token = localStorage.getItem("token");

  const { form, onChange } = useForm({ text: "", title: "" });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const handleSubmitPost = async (event) => {
    event.preventDefault();

    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const response = await axios.post(`${baseUrl}/posts`, form, axiosConfig);
      console.log(response.data.success);
      alert("Post criado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Não foi possível criar o post.");
    }

    getPosts();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const getPosts = async () => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const response = await axios.get(`${baseUrl}/posts`, axiosConfig);
      setPosts(response.data.posts);
      console.log(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const goToPost = (id) => {
    history.push(`/post/${id}`);
  };

  const dislikePost = async (id) => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    const body = {
      direction: -1,
    };

    try {
      const response = await axios.put(
        `${baseUrl}/posts/${id}/vote`,
        body,
        axiosConfig
      );
      console.log(response.data.success);
      alert("Post descurtido");
    } catch (error) {
      console.log(error);
      alert("Falha ao descurtir post");
    }

    getPosts();
  };

  const likePost = async (id) => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    const body = {
      direction: 1,
    };

    try {
      const response = await axios.put(
        `${baseUrl}/posts/${id}/vote`,
        body,
        axiosConfig
      );
      console.log(response.data.success);
      alert("Post curtido");
    } catch (error) {
      console.log(error);
      alert("Falha ao curtir post");
    }

    getPosts();
  };

  return (
    <div>
      <h3>Feed de posts</h3>
      <form onSubmit={handleSubmitPost}>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          name="title"
          value={form.title}
          minLength="3"
          required
          onChange={handleInputChange}
        />
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
        {posts.length === 0 && <div>Carregando...</div>}
        {posts &&
          posts.map((post) => {
            return (
              <div>
                <p>{post.username}</p>
                <p>{post.text}</p>
                <p>{post.commentsCount} comentários</p>
                <button onClick={() => goToPost(post.id)}>Detalhes post</button>
                <button onClick={() => likePost(post.id)}>+</button>
                {post.votesCount}
                <button onClick={() => dislikePost(post.id)}>-</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FeedPage;
