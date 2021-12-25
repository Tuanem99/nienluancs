const sql = require('./db.js');

const OrderProduct = function(orderProduct){
    this.idoder = orderProduct.idoder,
    this.idproduct = orderProduct.idproduct,
    this.color = orderProduct.color,
    this.size = orderProduct.size,
    this.price = orderProduct.price,
    this.quantity = orderProduct.quantity
}

OrderProduct.create = (newOrderproduct, result)=>{
    sql.query("INSERT INTO orderproducts SET ?", newOrderproduct, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("order product: ", res);
        result(null, {...newOrderproduct})
    })
}

OrderProduct.getById = (id, result) =>{
    sql.query("select idOrder,products.id as idsp, products.name as name, color, size, products.Price from orderproducts, orders, products where orderproducts.idoder = orders.idOrder and products.id = orderproducts.idproduct  and orders.iduser = ?;", id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res)
    })
}

OrderProduct.getall = result =>{
    sql.query("select idOrder, products.name as name, color, size, products.Price from orderproducts, orders, products where orderproducts.idoder = orders.idOrder and products.id = orderproducts.idproduct;", (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res)
    })
}

module.exports = OrderProduct;