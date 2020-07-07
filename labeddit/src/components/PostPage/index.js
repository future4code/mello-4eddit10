import React, { useState, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import useForm from "../../hooks/useForm"

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

function PostPage() {
  useProtectedPage();

  const { form, onChange } = useForm ({ text:""});
  const { postId } = useParams();

  const history = useHistory();

  const token = localStorage.getItem("token")
  
  const [post, setPost] = useState({})

  useEffect(() => {
    getPostDetail();
  }, []);

  const getPostDetail = async() => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      }
    };

    try {
      const response = await axios.get(`${baseUrl}/posts/${postId}`, axiosConfig);
      console.log(response.data.post)
      setPost(response.data.post)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmitComment= async (event)=> {
    event.preventDefault();

    const axiosConfig = {
      headers: {
        Authorization: token,
      }
    };

    const body = {
      text: form.text,
    }
    
    try {
      const response = await axios.post(`${baseUrl}/posts/${postId}/comment`, form, body, axiosConfig);
      console.log(response.data.success)
      alert("Comentário enviado com sucesso!")
    } catch(error) {
      console.log(error)
      alert("Não foi possível postar comentário.")
    }
  } 

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    onChange (name, value)
  };

  const backToFeed = () => {
    history.push("/feed");
  };

  return (
    <div>
      <h3>Post</h3>
      <button onClick={backToFeed}>Voltar Para o Feed</button>
      <div>
        <p>{post.username}</p>
        <p>{post.text}</p>
        <p>{post.commentsCount} comentários</p>
      </div>

      <hr />

      <form onSubmit = {onSubmitComment}>
        <label htmlFor="text">Escreva seu comentário</label>
        <input 
        onChange = {onChangeInput} 
        id="text" 
        type="text" 
        name="text"
        value={form.text}
        required />
        <button type="submit">Postar</button>
      </form>

      <hr />

      <div>
        <ul>
          {post.comments && post.comments.map(data => {
            return (
              <li>
                <p>{data.username}</p>
                <p>{data.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default PostPage;