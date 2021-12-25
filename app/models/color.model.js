const sql = require('./db.js');

const Color = function (color){
    this.name = color.name;
}

Color.create = (newColor, result) =>{
    sql.query("INSERT INTO Colors  SET ?", newColor, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("create category: ",{ ...newColor});
        result(null, res);
    })
}

Color.getAll = result =>{
    sql.query('select * from Colors ;', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Color: ", res);
        result(null, res);
    })
}

Color.delete =(id, result) =>{
    sql.query("DELETE FROM Colors WHERE id = ? ", id, (err, res) => {
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
        console.log("deleted Color with id: ", id);
        result(null, res);
    });
}

Color.updateById = (id, name, result)=>{
    sql.query('UPDATE Colors SET name = ? where id=? ', [name, id], (err, res) =>{
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
        console.log("updated color: ", { id: id});
    })
}
module.exports = Color;

