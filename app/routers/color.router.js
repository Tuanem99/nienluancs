module.exports = function(app) {
    const color = require('../controllers/color.controller');
    const authJwt = require('../middleware/authJWT.js');
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/api/color',[authJwt.verifyToken,authJwt.isAdmin ] ,color.findAll)
    app.post('/api/color',[authJwt.verifyToken,authJwt.isAdmin ] ,color.create)
    app.delete('/api/color/:colorId',[authJwt.verifyToken,authJwt.isAdmin ] ,color.delete)
    app.put('/api/color/:colorId',[authJwt.verifyToken,authJwt.isAdmin ] ,color.update)
};