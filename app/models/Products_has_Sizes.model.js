const sql = require('./db.js');

const Products_has_Sizes = function(products_has_Sizes){
    this.Products_idProducts = products_has_Sizes.Products_idProducts;
    this.Sizes_idSizes =  products_has_Sizes.Sizes_idSizes;
}

Products_has_Sizes.create = (newProducts_has_Sizes, result) =>{
    sql.query("INSERT INTO Products_has_Sizes SET ?", newProducts_has_Sizes, (err, res)=>{
        if(err){
            console.log("err: ", err);
            result(err, null);
            return;
        }
        console.log("create Products_has_Sizes: ",{ ...newProducts_has_Sizes});
        result(null, res);
    })
}

Products_has_Sizes.getAll = result =>{
    sql.query("SELECT  p.id as idsp, p.name as tensp,  sizes.id as idsize, sizes.name as tensize FROM products_has_sizes s, products p, sizes where s.Products_idProducts = p.id and sizes.id = s.Sizes_idSizes;", (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return
        }
        console.log("products_has_Sizes: ", res);
        result(null, res);
    })
}

Products_has_Sizes.delete = (idsp, idsize, result )=>{
    sql.query("DELETE from products_has_sizes where Products_idProducts = ? and Sizes_idSizes = ? ", [idsp, idsize], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted Size with id: ", idsp);
        result(null, res);
    })
}

Products_has_Sizes.getById = (idsp, result) =>{
    sql.query("SELECT p.Products_idProducts as idsp, p.Sizes_idSizes as idsize, products.name as tensp, sizes.name as tensize  FROM products_has_sizes as p, products, sizes   where p.Products_idProducts = products.id and p.Sizes_idSizes=sizes.id and p.Products_idProducts=?;", idsp, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    })
}

module.exports = Products_has_Sizes;
