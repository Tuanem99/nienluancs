module.exports = function(app) {
    const Products_has_Colors= require('../controllers/Products_has_Colors.controller');
    const authJwt = require('../middleware/authJWT.js');
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get('/api/productshascolors',[authJwt.verifyToken,authJwt.isAdmin ],Products_has_Colors.getall)
    app.post('/api/productshascolors',[authJwt.verifyToken,authJwt.isAdmin ],Products_has_Colors.create)
    app.post('/api/deleteproductshascolors',[authJwt.verifyToken,authJwt.isAdmin ],Products_has_Colors.delete)
    app.get('/api/productshascolors/:idsp',Products_has_Colors.getById)
 
};