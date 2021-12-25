const User = require('../models/user.model.js');
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'content can not be empty',
        });
    }
    ;

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: 'USER'
    });

    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        else {
            const token = jwt.sign({id: data.id}, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            res.send({
                USER: {
                    id: data.id,
                    username: data.username,
                    email: data.email,
                    role: user.role,
                },
                accessToken: token
            });
        }
    });
};

exports.signin = (req, res) => {
    User.findUserName(req.body.username, (err, data) => {
        if (err) {
            return res.status(404).send({message: "Tên đăng nhập không tồn tại"});
        }

        passwordIsValid = bcrypt.compareSync(
            req.body.password,
            data.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Sai mật khẩu!"
            });
        }
        const token = jwt.sign({id: data.id}, config.secret, {
            expiresIn: 86400 // 24 hours
        });



        res.status(200).send({
            USER: {
                id: data.id,
                username: data.username,
                email: data.email,
                role: data.role,
            },
            accessToken: token
        });
    });

}

exports.changPwd = (req, res) =>{
    User.findPwd(req.body.username, (err,data)=>{
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        else{
            passwordIsValid = bcrypt.compareSync(
                req.body.passwordold,
                data.password
                );

            if (!passwordIsValid) {
                console.log('Sai mat khau')
                return res.status(401).send({
                    message: "Sai mật khẩu!"
                });
            } else{
                User.changPwd(req.body.username, req.body.passwordnew, (err, dt)=>{
                    if (err)
                    res.status(500).send({
                     message: err.message || "Some error occurred while creating the user."
                    });
                    else res.send({ message: `user was change pwd successfully!` });
                })
            }
        }
    })
}

exports.findOne = (req, res) => {
    User.findID(req.body.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with id ${req.body.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving user with id " + req.body.userId
                });
            }
        } else res.send(data);
    });
};

exports.getAll = (req, res) =>{
    User.getAll((err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    })
}

exports.delete = (req, res) => {
    User.delete(req.params.userId, (err, data) => {
         if (err) {
             if (err.kind === "not_found") {
                 res.status(404).send({
                     message: `Not found user with id ${req.params.userId}.`
                 });
             } else {
                 res.status(500).send({
                     message: "Could not delete user with id " + req.params.userId
                 });
             }
         } else res.send({ message: `user was deleted successfully!` });
     });
 };



