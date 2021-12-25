const Order = require('../models/Order.model');
const OrderProduct = require('../models/OrderProduct.model')
exports.create = (req, res) =>{
    const cart = req.body.cart;
    console.log(req.body)

    
    const order = new Order({
        address : req.body.address,
        phone : req.body.phone, 
        status : req.body.status,
        total : req.body.total,
        iduser : req.body.iduser,
        emailPaypal : req.body.emailPaypal,
        status: 0,
        name: req.body.name
    });

    Order.create(order, (err,result)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            }); return;
        } else{
            const check = true;

            cart.map((value, index)=>{
                const orderProduct = new OrderProduct({
                idoder : result.idorder,
                idproduct : value.idsp,
                color : value.color,
                size : value.size,
                price : value.gia,
                quantity : value.soluong
            });

            OrderProduct.create(orderProduct, (err1, rs)=>{
                if(err1){
                   check = false
                    return;
                }
            });
    })

    if(check){
        res.status(200).send({ message: `thanh cong` });
        return;
    }else{
        res.status(500).send({
            message: err1.message || "Some error occurred while creating the user."
        });
    }
        }
    })
}


exports.getById = (req, res)=>{
    Order.getById(req.userId, (err, data)=>{
        if(err)
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving customers."
        });
    else {
        const product = [];
        OrderProduct.getById(req.userId, (err, dt1)=>{
            if(err) console.log(dt1)
            else{
                console.log(product);
                res.send({data: data, product: dt1});
            }
        })
       }
    })
}

exports.cancleOrder = (req, res)=>{
    Order.canCleOrder(req.params.idorder, (err, data)=>{
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
        } else res.send({ message: `order cancle successfully!` });
    })
}

exports.ConformCancleOrder = (req, res)=>{
    Order.ConformCancleOrder(req.params.idorder, (err, data)=>{
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
        } else res.send({ message: `order cancle successfully!` });
    })
}

exports.ConformOrder = (req, res)=>{
    Order.ConformOrder(req.params.idorder, (err, data)=>{
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
        } else res.send({ message: `order cancle successfully!` });
    })
}

exports.getall = (req, res) =>{
    Order.getall((err, data)=>{
        if(err){
            res.status(500).send({message: err.message ||  "Some error occurred while retrieving customers."});
        }else{
            const product = [];
            OrderProduct.getall( (err, dt1)=>{
                if(err) console.log(err)
                else{
                    console.log(product);
                    res.send({data: data, product: dt1});
                }
            })
        }
    })
}

