const app = require("./server.js");
const mongodb = require("mongodb");
// const dotenv = require("dotenv");
const quizdao = require("./dao/quizDAO.js");
const usersdao = require("./dao/usersDAO.js");
const seeddata = require("./data.js");
var mongoose = require("mongoose");

// dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 5000;

mongoose.connect(process.env.TESTSYSTEM_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("useCreateIndex", true);

MongoClient.connect(process.env.TESTSYSTEM_DB_URI, {
  poolSize: 50,
  wtimeout: 2500,
  useNewUrlParse: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await quizdao.injectDB(client);
    await usersdao.injectDB(client);

  /** Add Seeding snippet */

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
