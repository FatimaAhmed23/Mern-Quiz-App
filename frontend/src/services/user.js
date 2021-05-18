
//Send get and post api requests to nodejs backend 

import http from "../http-common";

class UsersDataService {
  async CheckLogin(data) {
    return await http.post("/user/login", {
      email: data.email,
      password: data.password,
    });
  }
  async CheckRegister(data) {
    return await http.post("/user/signup", {
      email: data.email,
      password: data.password,
    });
  }
  async GetProfile(token) {
    return await http.get("/user/auth/profile?access_token=" + token);
  }

  async submitScore(type, email, score) {
    return await http.post("/user/enterscore", {
      type,
      email,
      score,
    });
  }

  async GetUsers() {
    return await http.get("/user/getusers");
  }
}

export default new UsersDataService();
