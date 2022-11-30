
(async () => {

    const express = require('express')

    const app = express()

    const corsD = require("cors")

    const routes = require('../config/routes')

    const bodyParser = require("body-parser");

    const cors = corsD

    app.listen(3001)

    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(bodyParser.json());

    app.use(cors({
        origin: '*'
    }));

    app.use(routes)


})();

