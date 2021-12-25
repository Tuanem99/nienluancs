const sql = require('./db.js');

const Review = function (review) {
        this.iduser = review.iduser,
        this.idproduct = review.idproduct,
        this.rating = review.rating,
        this.comment = review.comment
}

Review.create = (newReview, result)=>{
    sql.query("INSERT INTO reviews SET ?", newReview, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("create Review: ",{ ...newReview});
        result(null, res);
    })
}

Review.getById = (id, result) =>{
    sql.query("select idReviews,profile.firstname as name, idproduct, reviews.iduser, rating, profile.avt as avt, comment, date_format(datecmt, '%H:%i %d/%m/%Y') as datecmt from reviews, profile where reviews.iduser = profile.iduser and  idproduct = ? ",id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Review.getAll = (result) =>{
    sql.query("select idReviews, iduser, products.id as idsp,comment, rating, username, date_format(datecmt, '%H:%i %d/%m/%Y') as datecmt, name as tensp  from reviews,products,user where reviews.idproduct = products.id and reviews.iduser = user.id;", (err,res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Review.delete = (id, result) =>{
    sql.query("DELETE from reviews where idReviews = ?",id, (err, res)=>{
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
        console.log("deleted review with id: ", id);
        result(null, res);
    })
}

module.exports = Review;