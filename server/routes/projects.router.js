const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    // console.log('Router GET');
    pool.query(`SELECT * FROM "projects";`)
        .then((results) => {
            console.log(results);
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error:', error);
        })
});

router.post('/', (req, res) => {
    // console.log('Router POST');
    // console.log(req.body);
    pool.query(`INSERT INTO "projects"
    ("title", "description")
    VALUES ($1, $2);`, [req.body.title, req.body.description])
        .then((results) => {
            console.log(results);
            res.sendStatus(201);
        }).catch((errorFromPG) => {
            console.log(errorFromPG);
            res.sendStatus(500)
        })
});

router.delete('/:id', (req, res) => {
    // console.log('DELETE');
    // console.log(req.params.id);

    pool.query(`DELETE FROM "projects" WHERE "id" = $1;`, [req.params.id])
        .then((results) => {
            console.log('results from delete', results);
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
        })
})

module.exports = router;
