const Products_has_Sizes = require('../models/Products_has_Sizes.model');

exports.getall = (req, res)=>{
    Products_has_Sizes.getAll((err,data)=>{
        if(err)
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving customers."
        });
    else res.send(data);
    })
}

exports.create = (req, res) =>{
    const products_has_Sizes = new Products_has_Sizes({
        Products_idProducts: req.body.idsp,
        Sizes_idSizes: req.body.idsize
    });

    Products_has_Sizes.create(products_has_Sizes, (err, result)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            }); return;
        }
        else res.send({message: "thanhcong"})
    })
}

exports.delete = (req, res)=>{
    Products_has_Sizes.delete(req.body.idsp, req.body.idsize, (err, result)=>{
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found product with id ${req.body.idsp}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Sizewith id " + req.body.idsp
                });
            }
        } else res.send({ message: `Sizewas deleted successfully!` });
    })
}

exports.getById = (req, res) =>{
    Products_has_Sizes.getById(req.params.idsp, (err, data)=>{
        if(err){
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found product with id ${req.params.idsp}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Sizewith id " + req.params.idsp
                });
            }
        } else res.send({data});
    })
} 