const express = require('express');

const main = express();
const user = require("./routes/users");

main.set('view engine','pug');
main.set('views','views');
const bodyParser = require('body-parser');







main.use(user);

main.listen(5000);