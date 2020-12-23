require("dotenv").config({ path: ".env" });
const express = require("express");
const Database = require("./Utils/DatabaseConnection");

const getId = require("./Routes/api/getId");
const getUrlList = require("./Routes/api/getUrlList");

const app = express();
const PORT = process.env.PORT || 3001;
const DB = new Database();
// External
app.use(express.json());
// Routes
app.use("/api/getId", getId);
app.use("/api/getUrlList", getUrlList);
app.use(async (err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Something went wrong.",
  });
  console.error(err.message);
});

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
