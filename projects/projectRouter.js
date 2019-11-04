const express = require('express');

const db = require('../data/helpers/projectModel');

const router = express.Router();

// GET requests
router.get('/', (req, res) => {
  db.get()
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The project information could not be retrieved. ' + error.message })
  })
});

router.get('/:id', (req, res) => {
  db.get(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The project information could not be retrieved. ' + error.message})
  })
});


//project actions
router.get('/:id/actions', (req, res) => {
  db.getProjectActions(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The project information could not be retrieved. ' + error.message})
  })
});

// POST request
router.post('/', (req, res) => {
  const post = {name: req.body.name, description: req.body.description};
   db.insert(post)
  .then(data => {
    res.status(201).json(data);
  })
  .catch(error => {
    res.status(400).json({errorMessage: "Please provide all required details for the project." + error.message})
  })
})

// DELETE request
router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The post with this specific ID could not be removed ' + error.message});
  })
});

// PUT request
router.put('/:id', (req, res) => {
  const changes = req.body;
  db.update(req.params.id, changes)
    .then(data => {
      res.status(200).json(changes);
    })
    .catch(error => {
      res.status(500).json({ error: 'The pos information could not be modified ' + error.message})
    })
});


module.exports = router;