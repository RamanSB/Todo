import { InputBase, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { GlobalStateContext } from '../contexts/GlobalStateContext';
//import dotenv from 'dotenv'; - not loading properties in to process.env invoking dotenv.config()
import { createTodo } from '../api/todo-api';

export const MAX_NO_OF_TODO_ITEMS = 10;

const useStyles = makeStyles(theme => ({
    todoItemInput: {
        textAlign: "center",
        border: "2px solid grey",
        borderRadius: "4px",
        minWidth: "600px",
        minHeight: "50px",
        marginTop: "250px",
        color: "white"
    }
}));

function TodoItemInput() {
    
    const { globalState, setGlobalState } = React.useContext(GlobalStateContext);

    const [todoItem, setTodoItem] = React.useState({
            text: "",
            created: Date.now()
    });

    const onInputBaseChange = (event) => {
        setTodoItem(oldState => (
            {
                ...oldState,
                created: Date.now(),
                text: event.target.value.toString(),
            }
        ));
    }

    const onSubmitTodoItem = async () => {         
        // Caps the number of to-do items
        if (globalState.todoItems.length + 1 > MAX_NO_OF_TODO_ITEMS) {
            setGlobalState(globalState => ({
                ...globalState,
                showSnackbar: (globalState.todoItems.length + 1 > MAX_NO_OF_TODO_ITEMS) ? true : false
            }))
        } else {
            let newTodo = {created: Date.now(), text: todoItem.text};
            console.log(`NewTodo; ${JSON.stringify(newTodo)}`);
            setGlobalState(globalState => ({
                    ...globalState,
                    todoItems: [...globalState.todoItems, newTodo]
                })
            );
            await createTodo(newTodo);
        }
        // Clears the TodoItemInput state - ready to enter another todo item.
        setTodoItem({
            text: "",
            created: "",
        });
    }

    const classes = useStyles(); 

    return (        
            <div style={{textAlign: "center"}}>
                <InputBase 
                    onChange={onInputBaseChange}
                    placeholder={globalState.todoItems.length === 0 ? "Add something to do; take out the trash..." : "Add your to-do..."}
                    inputProps={{ style: {textAlign: 'center'} }} 
                    value={todoItem.text}
                    className={classes.todoItemInput}/>
                <IconButton 
                    onClick={onSubmitTodoItem}
                    disabled={todoItem.text === "" } 
                    style={{border: "1px solid white",
                    backgroundColor:"DimGray",
                    marginLeft:"4px"}}>
                    <Add style={{color: "#ffffff"}}/>
                </IconButton>    
            </div>
    );
}

export default TodoItemInput;