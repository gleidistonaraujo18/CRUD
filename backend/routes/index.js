const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../Model/User");
const UserController = require("../Controller/UserController");
// Middleware para processar o corpo da solicitação JSON
router.use(bodyParser.json());

// Middleware para processar dados de formulário URL encoded
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send("API REST CRUD");
});
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.delete("/users/:id", UserController.deleteUserById);
router.put("/users/:id", UserController.updateUserById);

module.exports = router;
