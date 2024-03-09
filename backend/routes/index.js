const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../Model/User");

// Middleware para processar o corpo da solicitação JSON
router.use(bodyParser.json());

// Middleware para processar dados de formulário URL encoded
router.use(bodyParser.urlencoded({ extended: true }));

// Rota inicial da API
router.get("/", (req, res) => {
  res.send("API REST CRUD");
});

// Rota para buscar todos os usuarios
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

//Buscar usuario por id
router.get("/users/:id", async function (req, res) {
  const id = parseInt(req.params.id);
  const users = await User.findOne({ where: { id: id } });
  res.status(200).json({ status: 200, users });
});

// Rota para criar um novo usuario
router.post("/users", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const UF = req.body.uf;

    await User.create({ name, email, UF });
    res
      .status(200)
      .json({ status: 200, msg: "Usuário cadastrado com sucesso" });
  } catch (error) {
    res.status(500).json({ status: 500, msg: "Erro ao criar usuário" });
  }
});

// Rota para deletar um usuario
router.delete("/users/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await User.destroy({ where: { id: id } });
    res.status(200).json({ status: 200, msg: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ status: 500, error: "Erro ao deletar usuário" });
  }
});

// Rota para atualizar dados de um usuario
router.put("/users/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email, UF } = req.body;

    const dataUpdate = {
      name,
      email,
      UF,
    };

    await User.update(dataUpdate, { where: { id: id } });
    res.status(200).json({ status: 200, msg: "Dados atualizados com sucesso" });
  } catch (error) {
    res.status(500).json({ status: 500, msg: "Erro ao atualizar usuário" });
  }
});

module.exports = router;
