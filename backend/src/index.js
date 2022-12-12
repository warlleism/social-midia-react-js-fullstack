
(async () => {

    const express = require('express')

    const app = express()

    const corsD = require("cors")

    const routes = require('../config/routes')

    const bodyParser = require("body-parser");

    const cors = corsD

    app.listen(3001, () => {
        console.log('conectado')
    })

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(express.json({ limit: '50mb' }));

    app.use(express.urlencoded({ limit: '50mb' }));

    app.use(bodyParser.json());

    app.use(cors({
        origin: '*'
    }));

    app.use(routes)


})();

