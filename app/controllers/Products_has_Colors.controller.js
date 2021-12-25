const Products_has_Colors = require('../models/Products_has_Colors.model');

exports.getall = (req, res)=>{
    Products_has_Colors.getAll((err,data)=>{
        if(err)
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving customers."
        });
    else res.send(data);
    })
}

exports.create = (req, res)=>{
    const products_has_Color = new Products_has_Colors({
        Products_idProducts: req.body.idsp,
        Colors_idColors: req.body.idcolor
    });

    Products_has_Colors.create(products_has_Color, (err, result)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            }); return;
        }
        else res.send({message: "thanhcong"})
    })
}

exports.delete = (req, res)=>{
    Products_has_Colors.delete(req.body.idsp, req.body.idcolor, (err, result)=>{
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found product with id ${req.body.idsp}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Color with id " + req.body.idsp
                });
            }
        } else res.send({ message: `color was deleted successfully!` });
    })
}

exports.getById = (req, res) =>{
    Products_has_Colors.getById(req.params.idsp, (err, data)=>{
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