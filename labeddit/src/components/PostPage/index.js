import React, { useState, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import {
  Grid,
  HeaderImg,
  ButtonFeed,
  ShareLogos,
  CommentPost,
  CommentWrite,
  CommentsList,
  ContentContainer,
  Header,
  PostContainer,
  LogoutButton,
  PostTitle,
  PostUsername,
  InputPostContent,
  DetailsBox,
} from "./../../styles";
import Mascote from "../../imgs/mascote.png";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5700",
    },
  },
});

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

function PostPage() {
  useProtectedPage();

  const { form, onChange } = useForm({ text: "" });
  const { postId } = useParams();

  const history = useHistory();

  const token = localStorage.getItem("token");

  const [post, setPost] = useState({});

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  const getPostDetail = async () => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const response = await axios.get(
        `${baseUrl}/posts/${postId}`,
        axiosConfig
      );
      setPost(response.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitComment = async (event) => {
    event.preventDefault();

    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const response = await axios.post(
        `${baseUrl}/posts/${postId}/comment`,
        form,
        axiosConfig
      );
      console.log(response.data.success);
      alert("Comentário enviado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Não foi possível postar comentário.");
    }

    getPostDetail();
  };

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const backToFeed = () => {
    history.push("/feed");
  };

  const dislikeComment = async (commentId) => {
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
        `${baseUrl}/posts/${postId}/comment/${commentId}/vote`,
        body,
        axiosConfig
      );
      console.log(response.data.success);
      alert("Comentário descurtido");
    } catch (error) {
      console.log(error);
      alert("Falha ao descurtir comentário");
    }

    getPostDetail();
  };

  const likeComment = async (commentId) => {
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
        `${baseUrl}/posts/${postId}/comment/${commentId}/vote`,
        body,
        axiosConfig
      );
      console.log(response.data.success);
      alert("Comentário Curtido");
    } catch (error) {
      console.log(error);
      alert("Falha ao curtir comentário");

      getPostDetail();
    }
  };

  return (
    <ContentContainer>
      <MuiThemeProvider theme={MyTheme}>
        <Grid>
          <Header>
            <HeaderImg width="100" src={Mascote} alt="Logo Menor" />
            <ButtonFeed onClick={backToFeed}>Feed</ButtonFeed>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </Header>
          <PostContainer>
            <CommentPost>
              <p>
                <PostTitle>{post.title}</PostTitle> |{" "}
                <PostUsername>@{post.username}</PostUsername>
              </p>
              <p>{post.text}</p>
              <p>{post.commentsCount} comentários</p>
              {/* Buttons de compartilhar */}
              <ShareLogos>
                {/* <!-- Sharingbutton Facebook --> */}
                <a
                  class="resp-sharing-button__link"
                  href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io"
                  rel="noopener"
                  aria-label="Facebook"
                >
                  <span class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium" />
                  <span
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--normal"
                  />
                  <img
                    width="25"
                    src="https://image.flaticon.com/icons/svg/174/174848.svg"
                    alt="facebook"
                  />
                </a>

                {/* <!-- Sharingbutton Twitter --> */}
                <a
                  class="resp-sharing-button__link"
                  href="https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium" />
                  <span
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--normal"
                  />
                  <img
                    width="25"
                    src="https://image.flaticon.com/icons/svg/174/174876.svg"
                    alt="twitter"
                  />
                </a>

                {/* <!-- Sharingbutton E-Mail --> */}
                <a
                  class="resp-sharing-button__link"
                  href="mailto:?subject=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;body=http%3A%2F%2Fsharingbuttons.io"
                  target="_self"
                  rel="noopener"
                  aria-label="E-Mail"
                >
                  <span class="resp-sharing-button resp-sharing-button--email resp-sharing-button--medium" />
                  <span
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--normal"
                  />
                  <img
                    width="28"
                    src="https://cdn.iconscout.com/icon/free/png-512/apple-mail-493152.png"
                    alt="email"
                  />
                </a>
              </ShareLogos>
            </CommentPost>

            <hr />
            <CommentWrite>
              <form onSubmit={onSubmitComment}>
                <label htmlFor="text"></label>
                <InputPostContent
                  placeholder="Escreva seu comentário aqui"
                  onChange={onChangeInput}
                  id="text"
                  type="text"
                  name="text"
                  value={form.text}
                  required
                />
                <ButtonFeed type="submit">Postar</ButtonFeed>
              </form>
            </CommentWrite>

            <div>
              <ul>
                {post.comments &&
                  post.comments.map((data) => {
                    return (
                      <CommentsList>
                        <PostTitle>@{data.username}</PostTitle>
                        <p>{data.text}</p>
                        <DetailsBox>
                          <ArrowUpwardIcon
                            color="primary"
                            onClick={() => likeComment(data.id)}
                          />
                          {data.votesCount}
                          <ArrowDownwardIcon
                            color="primary"
                            onClick={() => dislikeComment(data.id)}
                          />
                        </DetailsBox>
                      </CommentsList>
                    );
                  })}
              </ul>
            </div>
          </PostContainer>
        </Grid>
      </MuiThemeProvider>
    </ContentContainer>
  );
}

export default PostPage;
