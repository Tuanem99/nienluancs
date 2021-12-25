const Profile = require('../models/profile.model');
exports.updateProfile = (req, res) =>{
    const profile = new Profile({
        firstname : req.body.firstname ,
        lastname: req.body.lastname ,
        birthday: req.body.birthday,
        gender:  req.body.gender,
        phone: req.body.phone,
        address: req.body.address,
        iduser: req.userId
    })
    Profile.findID(req.userId, (err, data)=>{
        if(data===null){
            Profile.create(profile, (err, data)=>{
                if(err){
                    res.status(500).send({
                        message: err || "Some error occurred while creating the user."
                    });
                } else res.send({data});
            })
        }
       if(data==='find'){
            Profile.update(profile, req.userId, (err, data)=>{
                if(err){
                    res.status(500).send({
                        message: err || "Some error occurred while creating the user."
                    });
                } else res.send({data});
            })
       }
    });

}

exports.updateAvtProfile = (req, res) =>{
    const file = req.file
    const name = file.destination+'/'+file.filename;
    const filename = name.replace('./client/public/','/')
    Profile.findID(req.userId, (err, data)=>{
        if(data===null){
            Profile.createAvt(filename, req.userId, (err, data)=>{
                if(err){
                    res.status(500).send({
                        message: err || "Some error occurred while creating the user."
                    });
                } else res.send(data);
            })
        }
        else if(data==='find'){
            Profile.updateAvt(filename, req.userId, (err, data)=>{
                if(err){
                    res.status(500).send({
                        message: err || "Some error occurred while creating the user."
                    });
                } else res.send(data);
            })
        }
    });
}

exports.getProfile = (req, res) =>{
    Profile.get(req.userId, (err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    })
}