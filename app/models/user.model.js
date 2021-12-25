const sql = require('./db.js');
const bcrypt = require("bcryptjs");

const User =  function(user){
    this.username = user.username;
    this.email = user.email;
    this.password = bcrypt.hashSync(user.password, 8),
    this.role = user.role;
};

User.getAll = result => {
    sql.query("SELECT u.id, u.username, u.email, p.firstname, p.lastname, p.avt, DATE_FORMAT(p.birthday, '%d-%m-%Y') as  birthday, p.gender, p.phone, p.address FROM user u left join profile p on u.id = p.iduser where u.role='USER';", (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return
        }
        console.log("Size: ", res);
        result(null, res);
    })

}

User.create = (newUser, result) =>{
    sql.query("Insert into user SET ? ", newUser, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log('create user: ', {id: res.insertId,...newUser});
        result(null, { id: res.insertId, ...newUser });
    });
};


User.findUserName = (username, result) =>{
    sql.query(`SELECT * from user where username = '${username}'`, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
       //     console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    }); 
};

User.findID = (ID, result) =>{
    sql.query(`SELECT * from user where id = '${ID}'`, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            //     console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

User.getRole = (ID, result) =>{
    sql.query(`SELECT role from user where id = '${ID}'`, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            //     console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

User.findEmail = (email, result) =>{
    sql.query(`SELECT email from user where email = '${email}'`, (err, res)=>{
        if(err){
            //console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            //console.log("found email: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
}

User.delete =(id, result) =>{
    sql.query("DELETE FROM user WHERE id = ? ", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted user with id: ", id);
        result(null, res);
    });
}

User.changPwd = (username,pwd, result) =>{
    sql.query("UPDATE user SET password = ? WHERE username = ? ", [bcrypt.hashSync(pwd), username], (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("update pwf user with username: ",username);
        result(null, res);
    })
}

User.findPwd = (username, result) =>{
    sql.query("SELECT password FROM user WHERE username = ?", username, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res[0]);
    })
}



module.exports = User;