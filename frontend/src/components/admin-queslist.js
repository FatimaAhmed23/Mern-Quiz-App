import React, { useState, useEffect } from "react";
import QuestionsDataService from "../services/questions";
import { Modal, Button, Form } from "react-bootstrap";
import { useAlert } from "react-alert";

const AdminQuestionsList = (props) => {
  const alert = useAlert();

  // set state variables
  const [questions, setQuestions] = useState([]);
  const [show, setShow] = useState(false);
  const [showQuesModel, setQuesModelShow] = useState(false);
  const [ques, getQuestion] = useState(false);
 
  // Execute on render
  useEffect(() => {
    retrieveQuestions();

  }, []);
  
  // Push new answer values into a state array
  const getNewValues = (e) => {
    let values = e.target.value.split(",");
    if (ques.answerOptions[e.target.id] == null) {
      ques.answerOptions.splice(e.target.id, 0, {
        answerText: values[0],
        isCorrect: values[1],
      });
    } else {
      ques.answerOptions.splice(e.target.id, 1, {
        answerText: values[0],
        isCorrect: values[1],
      });
    }
  
  };

  // submit form data
  const editSubmit = () => {
    ques.questionText = document.querySelector("#question_updatefield").value;
    ques.type = document.querySelector("#type_updatefield").value;
    QuestionsDataService.updateQuestion(ques)
      .then((response) => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // show and hide ui components
  const handleShow = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  
  // get questions from database
  const retrieveQuestions = () => {
    QuestionsDataService.get()
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveQuestions();
  };

  // get question details by id and save in state variable
  const GetQuestionById = async (id) => {
    QuestionsDataService.getQuestion(id)
      .then((response) => {
        getQuestion(response.data.questionObject);

        if (ques != null) {
          if (show === false) {
            setShow(true);
          } else {
            setShow(false);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // delete question by id
  const DeleteQuestionById = async (id) => {
    QuestionsDataService.deleteQuestionById(id)
      .then((response) => {
        alert.show(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // add new option in question object stored in state variable
  const AddNewOption = (id) => {
    let newobject = { answerText: "New option", isCorrect: false };
    ques.answerOptions.splice(id, 0, newobject);
    const newques = Object.assign({}, ques);
    getQuestion(newques);

  };

  //delete option from question object
  const DeleteNewOption = (id) => {
    ques.answerOptions.splice(id, 1);
    const newques = Object.assign({}, ques);
    getQuestion(newques);
  };

  // Create a new object template for question
  const AddNewQuestion = (id) => {
    getQuestion({
      questionText: "Question",
      type: "Type",
      answerOptions: [],
    });
    handleShow();
  };

  return (
    <div class="App">
      <button
        type="button"
        className="btn btn-primary"
        style={{ margin: 10 }}
        onClick={() => AddNewQuestion()}
      >
        Add New Question
      </button>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Question</th>
            <th scope="col">Type</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, key) => {
            return (
              <tr>
                <th scope="row">{key + 1}</th>
                <td>
                  <b>Question:</b> {question.questionText}
                  <br></br>
                  <br></br>
                  <b>Options:</b> &nbsp;
                  {question.answerOptions.map((answerOption, key) =>
                    answerOption.isCorrect ? (
                      <button
                        type="button"
                        className="btn btn-success"
                        style={{ margin: 10 }}
                      >
                        {answerOption.answerText}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{ margin: 10 }}
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </td>
                <td>{question.type}</td>
                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ margin: 10 }}
                    onClick={() => GetQuestionById(question._id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ margin: 10 }}
                    onClick={() => DeleteQuestionById(question._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="col">
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Edit Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              {ques ? (
                <div>
                  <form>
                    <div className="form-group">
                      <div style={{ margin: 10 }}>
                        <label>Question</label>
                      </div>
                      <textarea
                        className="form-control"
                        id="question_updatefield"
                        rows="3"
                        defaultValue={ques ? ques.questionText : "Loading"}
                      ></textarea>
                    </div>
                    <br></br>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-default"
                        >
                          Type
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="type_updatefield"
                        defaultValue={ques.type}
                      ></input>
                    </div>
                    <br></br>
                    <div id="Optionlist">
                      {ques.answerOptions.map((answerOption, key) => (
                        <div className="input-group" id={key}>
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="">
                              Answer {key + 1} | Is Correct?
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            name=""
                            defaultValue={
                              answerOption.answerText +
                              "," +
                              answerOption.isCorrect
                            }
                            id={key}
                            onBlur={getNewValues}
                          ></input>
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              id={key}
                              onClick={() => DeleteNewOption(key)}
                            >
                              x
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </form>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ margin: 10 }}
                    onClick={() => AddNewOption(ques.answerOptions.length)}
                  >
                    + Option
                  </button>
                </div>
              ) : (
                "Loading..."
              )}
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={editSubmit}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleShow}>
              Close Modal
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminQuestionsList;
