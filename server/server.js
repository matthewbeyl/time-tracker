const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const entriesRouter = require('./routes/entries.router.js')

app.use(express.static('server/public'));

app.use('/entries', entriesRouter);

app.listen(PORT, function(){
    console.log('App running on port ', PORT);
})