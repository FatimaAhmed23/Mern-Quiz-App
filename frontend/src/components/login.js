import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UsersDataService from "../services/user";
import { useAlert } from "react-alert";
import { Redirect } from "react-router-dom";

function Login() {
  const alert = useAlert();
  const [userAuthenticated, getAuthentication] = useState(false);
  const [token, getToken] = useState(false);
  const [userRole, getRole] = useState(null);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      password: "",
      email: "",
    },
  });
  const onSubmit = (data) => {
    UsersDataService.CheckLogin(data)
      .then((response) => {
        if (response.data.error) {
          alert.show(response.data.error);
        } else if (response.data.token) {
          getRole(response.data.role);
          getAuthentication(response.data);
          getToken(response.data.token);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const LoginForm = () => (
    <div className="container">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm">
          <div className="card bg-light mb-3" style={{ maxWidth: 500 }}>
            <div className="card-header text-center">Online Quiz</div>
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form name="contactform" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    {...register("email")}
                    required
                  ></input>
                  <small
                    id="emailHelp"
                    className="form-text text-muted"
                  ></small>
                </div>
                <br></br>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    {...register("password")}
                    required
                  ></input>
                </div>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submit"
                  value="Submit"
                >
                  Submit
                </button>
                <a
                  type="submit"
                  className="btn btn-primary"
                  href="/register"
                  style={{ marginLeft: 10 }}
                >
                  Register here
                </a>
              </form>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );

  return token ? (
    userRole == "Student" ? (
      <Redirect to={"/quiz?access_token=" + token} />
    ) : (
      <Redirect to={"/admin/questions?access_token=" + token} />
    )
  ) : (
    <LoginForm></LoginForm>
  );
}

export default Login;
