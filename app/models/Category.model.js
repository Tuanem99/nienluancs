const sql = require('./db.js');

const Category = function (Category){
    this.name = Category.name;
}

Category.create = (newCategory, result) =>{
    sql.query("INSERT INTO Categories SET ?", newCategory, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;        
        }
        console.log("create category: ",{ ...newCategory});
        result(null, res);
    })
}

Category.getAll = result =>{
    sql.query('select * from Categories;', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Category: ", res);
        result(null, res);
    })
}

Category.delete =(id, result) =>{
    sql.query("DELETE FROM Categories WHERE id = ? ", id, (err, res) => {
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
        console.log("deleted Categories with id: ", id);
        result(null, res);
    });
}

Category.updateById = (id, name, result)=>{
    sql.query('UPDATE Categories SET name = ? where id=? ', [name, id], (err, res) =>{
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
        console.log("updated Category: ", { id: id});
    })
}


module.exports = Category;

