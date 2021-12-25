const Category = require('../models/Category.model');


exports.findAll = (req, res) =>{
    Category.getAll((err, data) =>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    })
}

exports.create = (req, res) =>{
    const category = new Category({
        name: req.body.categoryname
    });

    Category.create(category, (err, result)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            }); return;
        }
        else  res.send({message: "thanhcong"})
    })
}

exports.delete = (req, res) => {
    Category.delete(req.params.catedoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Category with id ${req.params.catedoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not deleteCategory with id " + req.params.catedoryId
                });
            }
        } else res.send({ message: `Color was deleted successfully!` });
    });
};

exports.update = (req, res) =>{
    Category.updateById(req.params.catedoryId, req.body.categoryname, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Category with id ${req.params.catedoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not updtaw Category with id " + req.params.catedoryId
                });
            }
        } else res.send({ message: `Color was update successfully!` });
    });
}