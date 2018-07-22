const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const entriesRouter = require('./routes/entries.router.js')
const projectsRouter = require('./routes/projects.router.js')
const bodyParser = require('body-parser')
// const pool = require('./modules/pool.js')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/entries', entriesRouter);
app.use('/projects', projectsRouter);

app.listen(PORT, function () {
    console.log('App running on port ', PORT);
})