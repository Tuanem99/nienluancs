const sql = require('./db.js');

const Products_has_Colors = function(products_has_Colors){
    this.Products_idProducts = products_has_Colors.Products_idProducts;
    this.Colors_idColors =  products_has_Colors.Colors_idColors;
}

Products_has_Colors.create = (newProducts_has_Colors, result) =>{
    sql.query("INSERT INTO Products_has_Colors SET ?", newProducts_has_Colors, (err, res)=>{
        if(err){
            console.log("err: ", err);
            result(err, null);
            return;
        }
        console.log("create Products_has_Colors: ",{ ...newProducts_has_Colors});
        result(null, {...newProducts_has_Colors});
    })
}


Products_has_Colors.getAll = result =>{
    sql.query("SELECT  p.id as idsp, p.name as tensp,  colors.id as idcolor, colors.name as tencolor  FROM products_has_colors c, products p, colors where c.Products_idProducts = p.id and colors.id = c.Colors_idColors;", (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("products_has_Color: ", res);
        result(null, res);
    })
}


Products_has_Colors.delete = (idsp, idcolor, result )=>{
    sql.query("DELETE from products_has_colors  where Products_idProducts = ? and Colors_idColors = ? ", [idsp, idcolor], (err, res)=>{
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
        console.log("deleted color with id: ", idsp);
        result(null, res);
    })
}

Products_has_Colors.getById = (idsp, result) =>{
    sql.query("SELECT p.Products_idProducts as idsp, p.Colors_idColors as idcolor, products.name as tensp, colors.name as tencolor  FROM products_has_colors as p, products, colors  where p.Products_idProducts = products.id and p.Colors_idColors=colors.id and p.Products_idProducts=?;", idsp, (err, res)=>{
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



module.exports = Products_has_Colors;