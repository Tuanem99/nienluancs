const Product = require('../models/product.model');

exports.Create = (req, res) =>{
    const data = JSON.parse(req.body.data);
    const file = req.file
    const name = file.destination+'/'+file.filename;
    const filename = name.replace('./client/public/','/')
    const product = new Product({
         Descriptions : data.Descriptions,
         Price :  data.price,
         img :  filename,
         id_category :  data.cateID,
         name: data.name
    });
Product.create(product, (err, data1)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        }
        else{
            res.status(200).send({ message: `thanh cong` });
        }
    })
}

exports.getAllDetail = (req, res) =>{
    Product.getDetailAll((err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data)
    })
}

exports.getDetailById = (req, res) =>{
    Product.getDetailById(req.params.idsp,(err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data)
    })
}

exports.delete = (req, res) => {
    Product.delete(req.params.productId, (err, data) => {
         if (err) {
             if (err.kind === "not_found") {
                 res.status(404).send({
                     message: `Not found  Product with id ${req.params.productId}.`
                 });
             } else {
                 res.status(500).send({
                     message: "Could not delete  Product with id " + req.params.productId
                 });
             }
         } else res.send({ message: ` Product was deleted successfully!` });
     });
 };


exports.findAll = (req, res)=>{
    Product.getAll((err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    })
}


exports.update = (req, res) =>{
    const product = new Product({
        Descriptions : req.body.Descriptions,
        Price :  req.body.price,
        id_category :  req.body.cateID,
        name: req.body.name
   });
    Product.updateById( product,req.params.productId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Color with id ${req.params.productId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not updtaw Color with id " + req.params.productId
                });
            }
        } else res.send({ message: `Color was update successfully!` });
    });
}

exports.uploadImg = (req, res) =>{

    const file = req.file
    const name = file.destination+'/'+file.filename;
    const filename = name.replace('./client/public/','/')
    console.log(file, filename)
    Product.updateImg(filename, req.params.productId, (err, data)=>{
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.productId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not updtaw Product with id " + req.params.productId
                });
            }
        } else res.send({ message: `Product was update successfully!` });
    }) 
}