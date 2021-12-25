const Review = require('../models/Review.model');


exports.create = (req, res) =>{

    const review = new Review({
        iduser : req.body.iduser,
        idproduct : req.body.idproduct,
        rating : req.body.rating,
        comment : req.body.comment
    });

    Review.create(review, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating."
            }); return;
        }
        else  res.send({message: "thanhcong"})
    })

}

exports.getById = (req, res) =>{
    Review.getById(req.params.idsp, (err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data)
    })
}

exports.getAll = (req, res) =>{
    Review.getAll((err,data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving"
            });
        else res.send(data)
    })
}

exports.delete = (req, res)=>{
    Review.delete(req.params.idreview, (err, data)=>{
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: 'not found.'
                });
            } else {
                res.status(500).send({
                    message: "Could not delete id "});
            }
        } else res.send({ message: `deleted successfully!` });
    })
}