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
    

// router.route('/todos/:id')
//     .get(apiController.getPostById)
//     .delete(apiController.deleteTodo);

//router.param('id', apiController.loadTodo);

export default router;