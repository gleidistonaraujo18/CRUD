const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("CRUD", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectado ao banco de dados");
} catch (error) {
  console.log("Erro ao conectar ao banco de dados. Erro: " + error);
}

module.exports = sequelize;
