const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();


// GET /us
router.get('/', (req,res) => {
    pool.query('SELECT * FROM us')
    .then((dbResult) => {
      res.send(dbResult.rows);
      console.log("TESTING TO SEE", dbResult.rows)
    })
})

// POST /things - - - - - -  Create one thing.

// DELETE /things/:id - - -  Delete one thing.

// PUT /things/:id - - - - - Update one thing.


module.exports = router;
