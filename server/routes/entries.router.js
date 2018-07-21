const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Router GET');
    pool.query(`SELECT * FROM "entry";`)
        .then((results) => {
            console.log(results);
            res.send(results.rows)
        })
});

router.post('/', (req, res) => {
    console.log('Router POST');
    console.log(req.body);
    pool.query(`INSERT INTO "entry"
    ("notes", "project", "date", "time")
    VALUES ($1, $2, $3, $4);`, [req.body.notes, req.body.project, req.body.date, req.body.time])
        .then((results) => {
            console.log(results);
            res.sendStatus(201);
        }).catch((errorFromPG) => {
            console.log(errorFromPG);
            res.sendStatus(500)
        })
});

router.delete('/:id', (req, res) => {
    console.log('DELETE');
    console.log(req.params.id);

    pool.query(`DELETE FROM "entry" WHERE "id" = $1;`, [req.params.id])
        .then((results) => {
            console.log('results from delete', results);
            res.sendStatus(200);
        })
})

module.exports = router;