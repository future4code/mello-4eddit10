import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";

import LoginPage from "./LoginPage/index";
import SignUpPage from "./SignUpPage/index";
import FeedPage from "./FeedPage/index";
import PostPage from "./PostPage/index";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DocumentTitle title="LabEddit - Login">
            <LoginPage />
          </DocumentTitle>
        </Route>
        <Route exact path="/signup">
          <DocumentTitle title="LabEddit - Cadastro">
            <SignUpPage />
          </DocumentTitle>
        </Route>
        <Route exact path="/feed">
          <DocumentTitle title="LabEddit - Feed">
            <FeedPage />
          </DocumentTitle>
        </Route>
        <Route exact path="/post">
          <DocumentTitle title="LabEddit - Post">
            <PostPage />
          </DocumentTitle>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
