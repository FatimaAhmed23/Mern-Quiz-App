import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import QuestionsList from "./components/questions-list";
import QuizTypes from "./components/quiz-types";
import AllUsers from "./components/allusers";
import Login from "./components/login";
import RegisterUser from "./components/register";
import AdminQuestionsList from "./components/admin-queslist";
import Header from "./components/header";
import { useAlert } from "react-alert";
import UsersDataService from "./services/user";
import { useLocation } from "react-router-dom";

function App() {
  const alert = useAlert();
  const queryvalue = new URLSearchParams(useLocation().search);
  const [user, setUser] = React.useState(false);
  const [token, getToken] = useState(queryvalue.get("access_token"));

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    if (token) {
      UsersDataService.GetProfile(token)
        .then((response) => {
          const user_data = Object.assign({}, response.data.user);
          setUser(user_data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="App">
      <Route
        path={["/admin/questions", "/quiz", "/test", "/admin/testusers"]}
        render={(props) => <Header user={user} token={token} {...props} />}
      />

      <div className="container mt-3">
        <Switch>
          <Route
            exact
            path={["/"]}
            render={() =>
              user ? (
                user.role == "Student" ? (
                  <Redirect to={"/quiz?access_token=" + token} />
                ) : (
                  <Redirect to={"/admin/questions?access_token=" + token} />
                )
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path={["/login"]} component={Login} />
          <Route exact path={["/admin/testusers"]} component={AllUsers} />
          <Route exact path={["/register"]} component={RegisterUser} />
          <Route exact path={["/quiz"]} component={QuizTypes} />
          <Route
            exact
            path={["/test"]}
            render={(props) => (
              <QuestionsList user={user} token={token} {...props} />
            )}
          />
          <Route
            exact
            path={["/admin/questions"]}
            component={AdminQuestionsList}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
