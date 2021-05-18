import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import UsersDataService from "../services/user";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const queryvalue = new URLSearchParams(useLocation().search);

  //set state variables
  const [user, setUser] = React.useState(false);
  const [token, getToken] = useState(queryvalue.get("access_token"));

  // execute on render
  useEffect(() => {
    getProfile();
  }, []);

  // get profile information and save in state variable
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <div
          className="alert alert-primary"
          role="alert"
          style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}
        >
          {user ? "Hello " + user.email : "Loading..."}
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {user.role == "Student" ? (
            <li className="nav-item">
              <a className="nav-link" href={"/quiz?access_token=" + token}>
                Quiz
              </a>
            </li>
          ) : (
            ""
          )}
          {user.role == "Admin" ? (
            <>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={"/admin/questions?access_token=" + token}
                >
                  Manage Questions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={"/admin/testusers?access_token=" + token}
                >
                  Users
                </a>
              </li>
            </>
          ) : (
            ""
          )}
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
