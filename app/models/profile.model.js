const sql = require('./db.js');

const Profile = function (profile){
        this.firstname = profile.firstname,
        this.lastname = profile.lastname,
        this.birthday = profile.birthday,
        this.gender = profile.gender,
        this.phone = profile.phone,
        this.address = profile.address,
        this.iduser = profile.iduser
}

Profile.findID = (ID, result) =>{
    sql.query(`SELECT * from profile where iduser = '${ID}'`, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if(res.length){
            result(null, 'find');
            return;
        }
        result({ kind: "not_found" }, null);
    });
}

Profile.create = (newProfile, result)=>{
    sql.query("INSERT INTO profile(firstname, lastname, birthday, gender, phone, address, iduser) VALUES (?,?,?,?,?,?,?)", [newProfile.firstname, newProfile.lastname, newProfile.birthday, newProfile.gender, newProfile.phone, newProfile.address, newProfile.iduser], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, { ...newProfile });
    });
}

Profile.update = (newProfile, id, result)=>{
    sql.query("UPDATE profile SET firstname = ? , lastname=? , birthday =?, gender=?, phone=?, address=? where iduser = ?", [newProfile.firstname, newProfile.lastname, newProfile.birthday, newProfile.gender, newProfile.phone, newProfile.address, id], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, { ...newProfile });
    });
}

Profile.createAvt = (avt, id, result)=>{
    sql.query("INSERT INTO profile(avt, iduser) VALUES (?, ?)", [avt,id], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, avt );
    });
}

Profile.updateAvt = (avt, id, result)=>{
    sql.query("UPDATE profile SET avt = ? WHERE iduser = ?", [avt, id], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, avt );
    });
}
Profile.get = (id, result) =>{
    sql.query("SELECT firstname, lastname, avt,  DATE_FORMAT(birthday, \"%Y-%m-%d\") as birthday, gender, phone, address from profile where iduser = ?", id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
}

module.exports = Profile;