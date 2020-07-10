import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm";
import Filter from "../Search";
import SearchContext from "../../contexts/SearchContext";
import labedditLogo from "../../imgs/mascote.png";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Comment from "@material-ui/icons/Comment.js";
import {
  ContentContainer,
  Grid,
  Header,
  PostContainer,
  HeaderImg,
  CreatePostForm,
  Posts,
  DetailsBox,
  LogoutButton,
  InputPost,
  InputPostContent,
  PostButton,
  PostTitle,
  PostUsername,
} from "../../styles";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5700",
    },
  },
});

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

function FeedPage() {
  useProtectedPage();
  let history = useHistory();

  const token = localStorage.getItem("token");
  const searchContext = useContext(SearchContext);

  const { form, onChange } = useForm({ text: "", title: "" });
  const [posts, setPosts] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

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

  let filteredPosts = [...posts];

  if (searchContext.search.name !== null) {
    console.log(searchContext.search.name);
    filteredPosts = filteredPosts.filter((post) => {
      debugger;
      console.log(post.title);
      return (
        (post.title &&
          post.title
            .toLowerCase()
            .includes(searchContext.search.name.toLowerCase())) ||
        (post.username &&
          post.username
            .toLowerCase()
            .includes(searchContext.search.name.toLowerCase())) ||
        (post.text &&
          post.text
            .toLowerCase()
            .includes(searchContext.search.name.toLowerCase()))
      );
    });
  }

  return (
    <ContentContainer>
      <MuiThemeProvider theme={MyTheme}>
        <Grid>
          <Header>
            <HeaderImg src={labedditLogo} alt={"Logo Labeddit"} />

            {/*  Campo de busca  */}
            <Filter />
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </Header>

          <PostContainer>
            <CreatePostForm onSubmit={handleSubmitPost}>
              <InputPost
                type="text"
                name="title"
                placeholder="Título"
                value={form.title}
                minLength="3"
                required
                onChange={handleInputChange}
              />
              <InputPostContent
                type="text"
                name="text"
                placeholder="Escreva seu post aqui"
                value={form.text}
                minLength="3"
                required
                onChange={handleInputChange}
              />
              <PostButton type="submit">Postar</PostButton>
            </CreatePostForm>
            <hr />
            <div>
              {filteredPosts.length === 0 && <div>Carregando...</div>}
              {filteredPosts &&
                filteredPosts.map((post) => {
                  return (
                    <Posts>
                      <p>
                        <PostTitle>{post.title}</PostTitle> |{" "}
                        <PostUsername>@{post.username}</PostUsername>
                      </p>
                      <p>{post.text}</p>
                      <DetailsBox>
                        <span>{post.commentsCount} </span>
                        <Comment
                          color="primary"
                          onClick={() => goToPost(post.id)}
                        />
                        <ArrowUpwardIcon
                          color="primary"
                          onClick={() => likePost(post.id)}
                        />
                        {post.votesCount}
                        <ArrowDownwardIcon
                          color="primary"
                          onClick={() => dislikePost(post.id)}
                        />
                      </DetailsBox>
                    </Posts>
                  );
                })}
            </div>
          </PostContainer>
        </Grid>
      </MuiThemeProvider>
    </ContentContainer>
  );
}

export default FeedPage;
