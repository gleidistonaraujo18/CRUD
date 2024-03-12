const User = require("../Model/User");

class UserController {
  static async getAll(req, res) {
    try {
      const users = await User.findAll({ raw: true });
      res.status(200).send(users);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  }

  static async getUserById(req, res) {
    const id = parseInt(req.params.id);
    const users = await User.findOne({ where: { id: id } });
    res.status(200).json({ status: 200, users });
  }

  static async createUser(req, res) {
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
  }

  static async deleteUserById(req, res) {
    try {
      const id = parseInt(req.params.id);
      await User.destroy({ where: { id: id } });
      res
        .status(200)
        .json({ status: 200, msg: "Usuário deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ status: 500, error: "Erro ao deletar usuário" });
    }
  }

  static async updateUserById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const { name, email, UF } = req.body;

      const dataUpdate = {
        name,
        email,
        UF,
      };

      await User.update(dataUpdate, { where: { id: id } });
      res
        .status(200)
        .json({ status: 200, msg: "Dados atualizados com sucesso" });
    } catch (error) {
      res.status(500).json({ status: 500, msg: "Erro ao atualizar usuário" });
    }
  }
}

module.exports = UserController;
