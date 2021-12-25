module.exports = function(app) {
    const Products_has_Sizes= require('../controllers/Products_has_Sizes.controller');
    const authJwt = require('../middleware/authJWT.js');
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get('/api/productshassizes',[authJwt.verifyToken,authJwt.isAdmin ],Products_has_Sizes.getall)
    app.post('/api/productshassizes',[authJwt.verifyToken,authJwt.isAdmin ],Products_has_Sizes.create)
    app.post('/api/deleteproductshassizes',[authJwt.verifyToken,authJwt.isAdmin ],Products_has_Sizes.delete)
    app.get('/api/productshassizes/:idsp',Products_has_Sizes.getById)

};