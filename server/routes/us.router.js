const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();


// GET /us - - - - - - - Respond with all the things.
router.get('/', (req,res) => {
  // Check to see if the router is connected and working
    pool.query('SELECT * FROM us')
    .then((dbResult) => {
      res.send(dbResult.rows);
      console.log("TESTING TO SEE", dbResult.rows)
    })
})

// GET /things/:id - - - - - Respond with one thing.

// POST /things - - - - - -  Create one thing.

// DELETE /things/:id - - -  Delete one thing.

// PUT /things/:id - - - - - Update one thing.


module.exports = router;
