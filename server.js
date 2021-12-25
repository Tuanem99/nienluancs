const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to bezkoder application."});
});

require('./app/routers/user.router')(app);
require('./app/routers/category.router')(app);
require('./app/routers/color.router')(app);
require('./app/routers/size.router')(app);
require('./app/routers/product.router')(app);
require('./app/routers/Products_has_Sizes.router')(app)
require('./app/routers/Products_has_Colors.router')(app)
require('./app/routers/Order.router')(app)
require('./app/routers/Review.router')(app)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
}); 

