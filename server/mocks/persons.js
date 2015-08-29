module.exports = function(app) {
  var express = require('express');
  var personsRouter = express.Router();

  personsRouter.get('/', function(req, res) {
    res.send({
      'persons': []
    });
  });

  personsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  personsRouter.get('/:id', function(req, res) {
    res.send({
      'persons': {
        id: req.params.id
      }
    });
  });

  personsRouter.put('/:id', function(req, res) {
    res.send({
      'persons': {
        id: req.params.id
      }
    });
  });

  personsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/persons', personsRouter);
};
