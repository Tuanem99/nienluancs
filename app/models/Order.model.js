const sql = require('./db.js');

const Order = function(order) {
    this.address = order.address,
    this.phone = order.phone,
    this.status = order.status,
    this.total = order.total,
    this.iduser = order.iduser,
    this.emailPaypal = order.emailPaypal,
    this.name = order.name
}

Order.create = (newOrder, result) =>{
    sql.query("INSERT INTO orders SET ?", newOrder, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("order: ", res);
        result(null, { idorder: res.insertId, ...newOrder});
    })
}

Order.getById = (id, result) =>{
    sql.query("select idOrder, address, phone, status, total, iduser, emailPaypal, name, date_format(dateOrder, '%d/%m/%Y %H:%i') as dateOrder from orders where iduser = ?", id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Order.canCleOrder = (id, result) =>{
    sql.query("update orders set status = ? where idOrder = ? ", [3, id], (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    })
}

Order.ConformCancleOrder = (id, result) =>{
    sql.query("update orders set status = ? where idOrder = ? ", [4, id], (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    })
}

Order.ConformOrder = (id, result) =>{
    sql.query("update orders set status = ? where idOrder = ? ", [2, id], (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    })
}

Order.getall = result =>{
    sql.query("select idOrder, address, phone, status, total, iduser, username, emailPaypal, name, date_format(dateOrder, '%d/%m/%Y %H:%i') as dateOrder from orders, user where user.id = orders.iduser;", (err, res)=>{
        if(err){
            console.log("error", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
}


module.exports = Order;
