import express from 'express';
import apiController from '../controllers/apiController.js';

const router = express.Router();

router.route('/todos')
    .get(apiController.getAllTodos)
    .post(apiController.createTodo);

router.route('/todos/:id')
    .delete(apiController.deleteTodo);

router.param('id', apiController.loadTodo);