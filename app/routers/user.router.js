const authJwt = require('../middleware/authJWT.js');
const verifySignUp = require('../middleware/verifySignUp.js');
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/public/img/avt')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now() + '-' +  file.originalname)
  }
})

const upload = multer({ storage: storage });

module.exports = function(app) {
  const user = require('../controllers/user.controller.js')
  const profile = require('../controllers/profile.controller')
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/api/user/signup',[verifySignUp.checkDuplicateUsernameOrEmail],user.signup);
  app.post('/api/user/changepwd',[authJwt.verifyToken],user.changPwd);
  app.get('/api/user/getall',[authJwt.verifyToken,authJwt.isAdmin] ,user.getAll);
  app.post('/api/user/signin',user.signin )
  app.put('/api/user',[authJwt.verifyToken], profile.updateProfile);
  app.post('/api/user/upload',[authJwt.verifyToken],upload.single('avt'),profile.updateAvtProfile);
  app.get('/api/user/profile',[authJwt.verifyToken],profile.getProfile)
  app.delete('/api/user/:userId',[authJwt.verifyToken,authJwt.isAdmin], user.delete)
};