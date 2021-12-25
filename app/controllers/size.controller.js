const Size= require('../models/size.model');


exports.findAll = (req, res) =>{
   Size.getAll((err, data) =>{
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

    const size = new Size({
        name: req.body.sizename
    });
   Size.create(size, (err, result)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            }); return;
        }
        else  res.send({message: "thanhcong"})
    });
}

exports.delete = (req, res) => {
   Size.delete(req.params.sizeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Sizewith id ${req.params.sizeId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Sizewith id " + req.params.sizeId
                });
            }
        } else res.send({ message: `Sizewas deleted successfully!` });
    });
};

exports.update = (req, res) =>{
    // console.log(req.params.catedoryId,req.body.Colorname )
   Size.updateById(req.params.sizeId, req.body.sizename, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Sizewith id ${req.params.sizeId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not updtaw Sizewith id " + req.params.sizeId
                });
            }
        } else res.send({ message: `Sizewas update successfully!` });
    });
}