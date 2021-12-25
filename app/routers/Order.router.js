module.exports = function(app) {
    const order = require('../controllers/Order.controller');
    const authJwt = require('../middleware/authJWT.js');
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post('/api/order',[authJwt.verifyToken], order.create);
    app.get('/api/order',[authJwt.verifyToken], order.getById);
    app.get('/api/orderall',[authJwt.verifyToken, authJwt.isAdmin], order.getall);
    app.delete('/api/order/:idorder',[authJwt.verifyToken], order.cancleOrder);
    app.delete('/api/order/conformcancle/:idorder',[authJwt.verifyToken, authJwt.isAdmin], order.ConformCancleOrder);
    app.delete('/api/order/conform/:idorder',[authJwt.verifyToken, authJwt.isAdmin], order.ConformOrder);
};