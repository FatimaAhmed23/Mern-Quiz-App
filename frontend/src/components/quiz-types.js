import React, { useState, useEffect } from "react";
import QuestionsDataService from "../services/questions";
import UsersDataService from "../services/user";
import { useLocation } from "react-router-dom";

const QuizTypes = (props) => {
  const queryvalue = new URLSearchParams(useLocation().search);

  //set state variables
  const [types, getTypes] = useState([]);
  const [token, getToken] = useState(queryvalue.get("access_token"));

  const [user, setUser] = useState({});

  // execute on render
  useEffect(() => {
    retrieveTypes();
    getProfile();
  }, []);

  // get unique types of questions
  const retrieveTypes = () => {
    QuestionsDataService.getqtypes()
      .then((response) => {
        getTypes(response.data.quiz_types);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // get profile information based on jwt
  const getProfile = () => {
    if (token) {
      UsersDataService.GetProfile(token)
        .then((response) => {
          const user_data = Object.assign({}, response.data);
          setUser(user_data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  if (types.length === 0) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="row">
        <h1>Practice Quizzes</h1>
        {types.map((type, key) => {
          return (
            <div className="col-sm-6" key={key}>
              <div className="card" style={{ margin: 20 }}>
                <div className="card-body">
                  <h5 className="card-title">{type}</h5>
                  <p className="card-text">
                    This is a small quiz and you can re-attempt it to improve
                    your score
                  </p>
                  <a
                    href={`/test?type=${type}&access_token=${token}`}
                    className="btn btn-primary"
                  >
                    Start Quiz
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default QuizTypes;
