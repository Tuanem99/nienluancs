const Color = require('../models/color.model.js');


exports.findAll = (req, res) =>{
    Color.getAll((err, data) =>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    })
}

exports.create = (req, res) =>{
    if(!req.body){
        res.status(400).send({
            message: 'content can not be empty',
        });
    };

    const color = new Color({
        name: req.body.Colorname
    });

    Color.create(color, (err, result)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            }); return;
        }
        else  res.send({message: "thanhcong"})
    })
}

exports.delete = (req, res) => {
    Color.delete(req.params.colorId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Color with id ${req.params.colorId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Color with id " + req.params.colorId
                });
            }
        } else res.send({ message: `Color was deleted successfully!` });
    });
};

exports.update = (req, res) =>{
    // console.log(req.params.catedoryId,req.body.Colorname )
    Color.updateById(req.params.colorId, req.body.Colorname, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Color with id ${req.params.colorId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not updtaw Color with id " + req.params.colorId
                });
            }
        } else res.send({ message: `Color was update successfully!` });
    });
}