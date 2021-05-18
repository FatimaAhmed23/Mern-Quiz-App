import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UsersDataService from "../services/user";
import { useAlert } from "react-alert";
import { Redirect } from "react-router-dom";

function RegisterUser() {
  const alert = useAlert();
  const [userAuthenticated, getAuthentication] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      password: "",
      email: "",
    },
  });
  const onSubmit = (data) => {
    UsersDataService.CheckRegister(data)

      .then((response) => {
        if (response.data.error) {
          alert.show(response.data.error);
        } else if (response.data.email) {
          alert.show("Success! Login now");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const RegisterForm = () => (
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <div className="card bg-light mb-3" style={{ maxWidth: 500 }}>
            <div className="card-header text-center">Online Quiz</div>
            <div className="card-body">
              <h5 className="card-title text-center">
                Register as a New Student
              </h5>
              <br></br>
              <form name="contactform" onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your username"
                    {...register("name")}
                  ></input>
                  <small
                    id="emailHelp"
                    className="form-text text-muted"
                  ></small>
                </div> */}
                <br></br>
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
                  <label>Password</label>
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
                  href="/login"
                  style={{ marginLeft: 10 }}
                >
                  Login Here
                </a>
              </form>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  );

  return userAuthenticated ? (
    <Redirect to="/quiz" />
  ) : (
    <RegisterForm></RegisterForm>
  );
}

export default RegisterUser;
