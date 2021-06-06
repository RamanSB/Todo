import TodoModel from '../models/TodoModel.js';

const getAllTodos = async (req, res) => {
    try {
        const results = await TodoModel.find();
        console.log(`Results: ${JSON.stringify(results)}`);
        return res.status(200).send(results);
    } catch (err) {
        return res.status(404).json({
            error: JSON.stringify(err)
        });
    }
}

const createTodo = async (req, res) => {
    try {
        console.log(`Request body: ${JSON.stringify(req.body)}`);   
        //console.log(`Properties; ${title}, ${description} @ ${date}`);
        const newTodo = new TodoModel(req.body);
        console.log(`${JSON.stringify(newTodo)}`);
        await newTodo.save();
        return res.status(200).send(newTodo);
    } catch (err) {
        return res.status(404).json({
            error: `An error occurred ${err}`
        });
    }
}

const getTodoById = async (req, res) => {
    try {
        return res.status(200).send(req.body.todo);
    } catch(err){
        return res.status(404).json({
            error: `An error occurred: ${err}`
        });
    }
}

const deletePost = async (req, res) => {
    try {
        const {_id} = req.body.todo;
        console.log(`Id: ${_id}`);
        await TodoModel.findByIdAndDelete(_id);
        console.log(`Successfully delete post: ${JSON.stringify(req.body.todo)}`);
        return res.status(200).json({
            result: "success",
            message: req.body.todo
        });
    } catch (err) {
        res.status(404).json({
            error: `An error occurred: ${err}`
        });
    }
}

const loadTodo = async (req, res, next, id) => {
    try {
        console.log(`loadTodo: ${id}`);
        const todoItem = await TodoModel.findById(id);
        if( todoItem == null) {
            throw new Error("Unable to find todo item with id: "  + id);
        }
        req.body.todo = todoItem;
        next();
    } catch(err) {
        return res.status(404).json({
            error: `An error occurred: ${err}`
        });
    }
}

export default { getAllTodos, createTodo, loadTodo, getTodoById, deletePost }