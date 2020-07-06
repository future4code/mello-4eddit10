import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage/index";
import SignUpPage from "./SignUpPage/index";
import FeedPage from "./FeedPage/index";
import PostPage from "./PostPage/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/post">
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
