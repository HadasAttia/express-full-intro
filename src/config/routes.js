const express = require('express');
const routes = express.Router();
const Tasks = require('../controllers/tasks');
const Albums = require('../controllers/albums');


routes.get('/task', Tasks.getAll);
routes.put('/task', Tasks.create);
routes.get('/task/:id', Tasks.get);
routes.delete('/task/:id', Tasks.delete);

routes.put('/album', Albums.create);
routes.get('/album', Albums.getAll);
routes.get('album/:id', Albums.get);
routes.post('/album/:id', Albums.edit);
routes.delete('/album/:id', Albums.delete);


module.exports = routes;