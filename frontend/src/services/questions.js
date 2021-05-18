
//Send get and post api requests to nodejs backend 

import http from "../http-common";

class QuestionsDataService {
  async get() {
    return await http.get("/system/");
  }

  async getqtypes() {
    return await http.get("/system/choosequiz");
  }

  find(query, by) {
    return http.get(`/system/?${by}=${query}`);
  }

  async getQuestion(id) {
    return await http.post("/system/getquestionbyid", {
      id: id,
    });
  }
  async updateQuestion(data) {
    return await http.post("/system/updatequestion", {
      data: data,
    });
  }

  async deleteQuestionById(id) {
    return await http.post("/system/deletequestion", {
      id: id,
    });
  }
}

export default new QuestionsDataService();
