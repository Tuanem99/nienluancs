const sql = require('./db.js');

const Size = function (size){
    this.name = size.name;
}

Size.create = (newSize, result) =>{
    sql.query("INSERT INTO Sizes  SET ?", newSize, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("create size: ",{ ...newSize});
        result(null, res);
    })
}

Size.getAll = result =>{
    sql.query('select * from Sizes ;', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Size: ", res);
        result(null, res);
    })
}

Size.delete =(id, result) =>{
    sql.query("DELETE FROM Sizes WHERE id = ? ", id, (err, res) => {
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
        console.log("deleted Size with id: ", id);
        result(null, res);
    });
}

Size.updateById = (id, name, result)=>{
    sql.query('UPDATE Sizes SET name = ? where id=? ', [name, id], (err, res) =>{
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
        console.log("updated Size: ", { id: id});
    })
}
module.exports = Size;

