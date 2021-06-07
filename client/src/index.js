import React from 'react';
import ReactDOM from 'react-dom';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

function TodoInput() {
    const [inputState, setInputState] = React.useState({
        shouldEnterDescription: false,
        title: "",
        description: ""
    });

    return (
        <div style={{width:"400px"}}>
            <TextField 
                id="todo-text-field" 
                label={inputState.shouldEnterDescription ? "Description" : "Title"}
                variant="outlined"
                color="#ffeeaa"
                size="medium"
                placeholder="Todo Title"
                fullWidth="524px"/>
        </div>
    )
}

const App = () => {
    console.log(`[App]`);
    return (
        <div>
            <h1>Todo List</h1>
            <TodoInput/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));

export default App;