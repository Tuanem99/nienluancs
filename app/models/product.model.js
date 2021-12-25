const sql = require('./db');

const Product = function (product){
    this.Descriptions = product.Descriptions,
    this.name = product.name
    this.Price = product.Price,
    this.img = product.img,
    this.id_category = product.id_category
}

Product.create = (newProduct, result)=>{
    sql.query("INSERT INTO Products SET ?", newProduct, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, {id: res.insertId, ...newProduct });
    });
}

Product.getAll = result =>{
    sql.query('SELECT p.id as idsp, p.name as tensp, p.Descriptions as mota, p.Price as gia, p.img, c.id as idloaisp, c.name as tenloaisp from products p, categories c where p.id_category = c.id; ;', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Products: ", res);
        result(null, res);
    })
}
Product.getDetailAll = result =>{
    sql.query("SELECT products.id as idsp, products.name as tensp, products.Price as giasp, products.img as img,products.id_category as idloaisp,colors.id as idmau, sizes.id as idsize, categories.name as tenloaisp, colors.name as tenmau, sizes.name as tensize FROM products, products_has_colors, products_has_sizes, categories, colors, sizes where products.id = products_has_colors.Products_idProducts AND products.id = products_has_sizes.Products_idProducts AND products.id_category = categories.id AND colors.id = products_has_colors.Colors_idColors AND sizes.id = products_has_sizes.Sizes_idSizes;", (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return
        }
        console.log("Product: ", res);
        result(null, res);
    })
}

Product.getDetailById = (id, result) =>{
    sql.query("SELECT p.id as idsp, p.Price as gia, p.name as tensp , p.Descriptions as mota, p.img, c.id as idloaisp, c.name as tenloaisp FROM products p, categories c where p.id_category = c.id and p.id = ?;",[id], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return
        }
        console.log("Product: ", res);
        result(null, res[0]);
    })
}

Product.delete =(id, result) =>{
    sql.query("DELETE FROM products WHERE id = ? ", id, (err, res) => {
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
        console.log("deleted products with id: ", id);
        result(null, res);
    });
}

Product.updateById = (newProduct, id, result)=>{
    sql.query("UPDATE products SET name = ? , Descriptions=? , Price=?, id_category=? where id = ?", [newProduct.name, newProduct.Descriptions, newProduct.Price, newProduct.id_category, id], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, { ...newProduct });
    });
}

Product.updateImg = (img, id, result )=>{
    sql.query("UPDATE products SET img = ? where id = ?", [img, id], (err, res)=>{
        if(err){
            console.log("error: ", err)
            result(err, null);
            return;
        }
       result(null, {...img})
    })
}


module.exports = Product;