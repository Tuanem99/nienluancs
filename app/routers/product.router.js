const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './client/public/img/product')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now() + '-' +  file.originalname)
    }
  })
  
  const upload = multer({ storage: storage });
  const product = require('../controllers/product.controller');
  const authJwt = require('../middleware/authJWT.js');
  module.exports = function(app) {
      app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
      app.post('/api/product',[authJwt.verifyToken,authJwt.isAdmin], upload.single('img'), product.Create);
      app.get('/api/product', [authJwt.verifyToken,authJwt.isAdmin], product.getAllDetail);
      app.get('/api/product/:idsp', product.getDetailById);
      app.delete('/api/product/:productId',[authJwt.verifyToken,authJwt.isAdmin ] ,product.delete)
      app.get('/api/products', product.findAll);
      app.put('/api/product/:productId',[authJwt.verifyToken,authJwt.isAdmin ] ,product.update);
      app.put('/api/productimg/:productId',[authJwt.verifyToken,authJwt.isAdmin], upload.single('img'), product.uploadImg);

  }