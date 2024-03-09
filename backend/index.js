const express = require("express");
const app = express();
const port = 7000;
const conn = require("./db/conn");
const cors = require("cors");

app.use(cors());
const router = require("./routes/index");

app.use("/", router);

conn
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Falha ao sincronizar o banco de dados: ${error.message}`);
    process.exit(1);
  });
