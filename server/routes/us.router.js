const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();


// GET /us - - - - - - - Respond with all the things.
router.get('/', (req,res) => {
  // Check to see if the router is connected and working
    console.log('router is online');
})

// GET /things/:id - - - - - Respond with one thing.

// POST /things - - - - - -  Create one thing.

// DELETE /things/:id - - -  Delete one thing.

// PUT /things/:id - - - - - Update one thing.


module.exports = router;
