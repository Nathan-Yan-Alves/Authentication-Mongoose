const User = require("../db/init");

module.exports = {
    createUser(req, res) {
        const { username, password } = req.body;

        User.findOne({ username }, (err, data) => {
            if (!data) {
                let user = new User({
                    username,
                    password,
                });
                user.save().then(() => res.send("Usuário adicionado"));
            } else {
                res.status(409).send(
                    "Usuário já cadastrado no banco de dados!"
                );
            }
        });
    },
    checkUser(req, res) {
        const { username, password } = req.body;

        User.findOne({ username, password }, (err, data) => {
            if (data) {
                res.send("Usuário logado com sucesso!");
            } else {
                res.status(404).send("Usuário não existe!");
            }
        });
    },
};
