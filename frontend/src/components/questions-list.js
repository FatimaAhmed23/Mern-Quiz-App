import React, { useState, useEffect } from "react";
import UsersDataService from "../services/user";
import QuestionsDataService from "../services/questions";
import { useLocation } from "react-router-dom";

const QuestionsList = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const queryvalue = new URLSearchParams(useLocation().search);
  useEffect(() => {
    retrieveQuestions();
  }, []);

  const retrieveQuestions = () => {
    QuestionsDataService.find(queryvalue.get("type"), "type")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAnswerOptionClick = (currentQuestion, isCorrect, key) => {
    if (answers[currentQuestion] == null) {
      answers.splice(currentQuestion, 0, isCorrect);
    } else {
      answers.splice(currentQuestion, 1, isCorrect);
    }
  };

  const ShowNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const SubmitTest = () => {
    setScore(answers.filter((x) => x == true).length);
    UsersDataService.submitScore(
      queryvalue.get("type"),
      props.user.email,
      answers.filter((x) => x == true).length
    )
      .then((response) => {
        setShowScore(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let submitButton;

  if (currentQuestion == questions.length - 1) {
    submitButton = (
      <a className="btn btn-primary" onClick={() => SubmitTest()}>
        Submit
      </a>
    );
  } else {
    submitButton = (
      <a className="btn btn-primary" onClick={() => ShowNext()}>
        Next
      </a>
    );
  }

  if (questions.length == 0) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="app">
        {showScore ? (
          <div style={{ textAlign: "center" }}>
            <div className="alert alert-primary text-center" role="alert">
              You scored {score} out of {questions.length}
            </div>
            <a
              className="btn btn-primary"
              style={{ marginRight: 5 }}
              href="javascript:location.reload();"
            >
              Re Attempt
            </a>
            <a
              className="btn btn-primary"
              href={"/quiz?access_token=" + props.token}
            >
              Go Back
            </a>
          </div>
        ) : (
          <>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card ">
                    <div className="card-header">
                      <span>Question No : {currentQuestion + 1}</span>/
                      {questions.length}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Domain : {questions[currentQuestion].type}
                      </h5>
                      <p className="card-text">
                        {questions[currentQuestion].questionText}.
                      </p>
                      {questions[currentQuestion].answerOptions.map(
                        (answerOption, key) => (
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={currentQuestion}
                              key={key}
                              defaultChecked={key === 0}
                              onClick={() =>
                                handleAnswerOptionClick(
                                  currentQuestion,
                                  answerOption.isCorrect,
                                  key
                                )
                              }
                            ></input>
                            <label className="form-check-label">
                              {answerOption.answerText}
                            </label>
                          </div>
                        )
                      )}
                      {submitButton}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default QuestionsList;
