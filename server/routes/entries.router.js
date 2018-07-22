const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    // console.log('Router GET');
    // pool.query(`SELECT * FROM "projects" JOIN "entry" ON "projects"."id" = "entry"."project_id";`)
    pool.query(`SELECT "entry"."id", "notes", "title", DATE("date") as "date", "time" FROM "projects" JOIN "entry" ON "projects"."id" = "entry"."project_id";`)
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
    pool.query(`INSERT INTO "entry"
    ("project_id", "notes", "date", "time")
    VALUES ($1, $2, $3, $4);`, [req.body.project_id, req.body.notes, req.body.date, req.body.time])
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

    pool.query(`DELETE FROM "entry" WHERE "id" = $1;`, [req.params.id])
        .then((results) => {
            console.log('results from delete', results);
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error, req.params.id);
        });
})

module.exports = router;