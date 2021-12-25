module.exports = function(app) {
    const size = require('../controllers/size.controller');
    const authJwt = require('../middleware/authJWT.js');
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get('/api/size',[authJwt.verifyToken,authJwt.isAdmin ],size.findAll)
    app.post('/api/size',[authJwt.verifyToken,authJwt.isAdmin ] ,size.create)
    app.delete('/api/size/:sizeId',[authJwt.verifyToken,authJwt.isAdmin ] ,size.delete)
    app.put('/api/size/:sizeId',[authJwt.verifyToken,authJwt.isAdmin ] ,size.update)
};