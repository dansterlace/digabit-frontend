module.exports = function(app) {
  var express = require('express');
  var peopleRouter = express.Router();

  peopleRouter.get('/', function(req, res) {
    res.send({
      'people': [
      {id: 0, firstName: 'George', lastName: 'Washington', avatar: 'assets/images/01_150.gif', 'friends': [1, 2, 3, 4, 5, 6]},
      {id: 1, firstName: 'John', lastName: 'Adams'},
      {id: 2, firstName: 'Thomas', lastName: 'Jefferson'},
      {id: 3, firstName: 'James', lastName: 'Madison'},
      {id: 4, firstName: 'James', lastName: 'Monroe'},
      {id: 5, firstName: 'John Quincy', lastName: 'Adams'},
      {id: 6, firstName: 'Andrew', lastName: 'Jackson'}
      ]
    });
  });

  peopleRouter.post('/', function(req, res) {
    res.send({
      'people': {
        id:7, firstName: 'Harry S', lastName: 'Truman'
      }
    });
    res.status(201).end();
  });

  peopleRouter.get('/:id', function(req, res) {
    res.send({
      'people': {
        id: req.params.id
      }
    });
  });

  peopleRouter.put('/:id', function(req, res) {
    res.send({
      'people': {
        id: req.params.id
      }
    });
  });

  peopleRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/people', peopleRouter);
};
