const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
  host: 'localhost',
  port: '5432',
  database: 'projects',
  max: 10,
  idleTimeoutMillis: 30000
})

pool.on('connect', () => {
  console.log('PG connected to Posgresql');
});

pool.on('error', (error) => {
  console.log('Error', error);
});

module.exports = pool; 