import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import QuestionsDataService from "../services/questions";
import UsersDataService from "../services/user";
import { useLocation } from "react-router-dom";

const AllUsers = (props) => {
  const queryvalue = new URLSearchParams(useLocation().search);

  // set state variables
  const [token, getToken] = useState(queryvalue.get("access_token"));
  const [allusers, getallusers] = useState(false);

  // execute on render
  useEffect(() => {
    retrieveUsers();
  }, []);

  // get users who have attempted the test from database
  const retrieveUsers = () => {
    UsersDataService.GetUsers()
      .then((response) => {
        getallusers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="App">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Test Scores</th>
          </tr>
        </thead>
        <tbody>
          {allusers
            ? allusers.map((user, key) => {
                return (
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{user.email}</td>
                    <td>
                      <ul className="list-group">
                        {Object.entries(user.test_results).map(
                          ([key, value]) => {
                            return (
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                {key}
                                <span
                                  className="badge badge-primary badge-pill"
                                >
                                  {value}
                                </span>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
