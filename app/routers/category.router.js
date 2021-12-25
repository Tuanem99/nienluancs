module.exports = function(app) {
    const category = require('../controllers/category.controller');
    const authJwt = require('../middleware/authJWT.js');
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/api/category' ,[authJwt.verifyToken,authJwt.isAdmin ],category.findAll)
    app.post('/api/category',[authJwt.verifyToken,authJwt.isAdmin ] ,category.create)
    app.delete('/api/category/:catedoryId',[authJwt.verifyToken,authJwt.isAdmin ] ,category.delete)
    app.put('/api/category/:catedoryId',[authJwt.verifyToken,authJwt.isAdmin ] ,category.update)
};