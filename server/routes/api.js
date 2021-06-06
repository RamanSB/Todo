import express from 'express';
import apiController from '../controllers/apiController.js';

const router = express.Router();

router.get('/api/test', (req, res) => {
    console.log(`test`);
    return res.status(200).send('test');
});

router.route('/api/todos')
    .post(apiController.createTodo)
    .get(apiController.getAllTodos)
    

router.route('/api/todos/:id')
    .get(apiController.getTodoById)
    .delete(apiController.deletePost)

router.param('id', apiController.loadTodo);

export default router;