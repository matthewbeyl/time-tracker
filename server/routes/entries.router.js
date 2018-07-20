const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Router GET');
    pool.query(`SELECT * FROM "projects";`)
        .then((results) => {
            console.log(results);
            res.send(results.rows)
        })
});

router.post('/', (req, res) => {
    console.log('Router POST');
    console.log(req.body);
    pool.query(`INSERT INTO "projects"
    ("title", "description", "date", "time")
    VALUES ($1, $2, $3, $4);`, [req.body.title, req.body.description, req.body.date, req.body.time])
        .then((results) => {
            console.log(results);
            res.sendStatus(201);
        }).catch((errorFromPG) => {
            console.log(errorFromPG);
            res.sendStatus(500)
        })
});

module.exports = router;