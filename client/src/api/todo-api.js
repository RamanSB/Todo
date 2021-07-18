import axios from 'axios';

const getAllTodos = async () => {
    try {
        let response = await axios.get('/api/todos');
        console.log(`[todo-api HttpRequest] getAllTodos: ${response.statusText} ${response.status}`);
        return response;
    } catch (err) {
        console.log(`An error occurred when retreiving all ToDo's: ${err}`);
    }
}

const createTodo = async (todo) => {
    try {
        console.log(`Attempting to write todo to db: ${JSON.stringify(todo)}`);
        let response = await axios.post('/api/todos', todo);
        console.log(`[todo-api HttpRequest] createTodo: ${response.statusText} ${response.status}`);
        return response.status;
    } catch (err) {
        console.log(`An error occurred when creating a Todo Item: ${err}`);
    }
}

const deleteTodo = async (todo) => {
    try {
        console.log(`Attempting to delete todo from db: ${JSON.stringify(todo)}`);
        console.log(`Request URL: /api/todos/${todo._id}`);
        let response = await axios.delete(`/api/todos/${todo._id}`);
        return response.status;
    } catch (err) {
        console.log(`An error occurred when deleting a Todo Item: ${err}`);
    }
}

export { getAllTodos, createTodo, deleteTodo } 