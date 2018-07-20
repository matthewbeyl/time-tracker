const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
// const entriesRouter = require('./routes/entries.router.js')
const bodyParser = require('body-parser')
const pool = require('./modules/pool.js')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// app.use('/entries', entriesRouter);

app.get('/', (req, res) => {
    console.log('Router GET');
    pool.query(`SELECT * FROM "projects";`)
        .then((results) => {
            console.log(results);
            res.send(results.rows)
        })
});

app.post('/', (req, res) => {
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

app.delete('/:id', (req, res) => {
    console.log('DELETE');
    console.log(req.params.id);
    
    pool.query(`DELETE FROM "projects" WHERE "id" = $1;`, [req.params.id])
    .then( (results) => {
      console.log('results from delete', results);
      res.sendStatus(200);
    })
})

app.listen(PORT, function () {
    console.log('App running on port ', PORT);
})