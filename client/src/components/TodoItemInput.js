import { InputBase, IconButton, Badge } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import GlobalStateContextProvider, { GlobalStateContext } from '../contexts/GlobalStateContext';
//import dotenv from 'dotenv'; - not loading properties in to process.env invoking dotenv.config()


const MAX_NO_OF_TODO_ITEMS = 6;

const useStyles = makeStyles(theme => ({
    todoItemInput: {
        textAlign: "center",
        border: "2px solid grey",
        borderRadius: "4px",
        minWidth: "600px",
        minHeight: "50px",
        marginTop: "250px"
    }
}));

function TodoItemInput() {
    
    const { globalState, setGlobalState } = React.useContext(GlobalStateContext);

    const [todoItem, setTodoItem] = React.useState({
            text: "",
            created: Date.now()
    });


    const onInputBaseChange = (event) => {
        console.log(`An input occurred: ${event.target.value}`);
        console.log(`Initial State: ${JSON.stringify(todoItem)}`);
        setTodoItem(oldState => (
            {
                ...oldState,
                created: Date.now(),
                text: event.target.value.toString()
            }
        ));

        console.log(`State: ${JSON.stringify(todoItem)}`);
    }

    const onSubmitTodoItem = () => {    
        console.log(`localState [Initial]: ${JSON.stringify(todoItem)}`);
        console.log(`GlobalState [Initial]: ${JSON.stringify(globalState)}`);
        setTodoItem({
            text: "",
            created: ""
        });
        
        if (globalState.todoItems.length + 1 > MAX_NO_OF_TODO_ITEMS) {
            setGlobalState(globalState => ({
                ...globalState,
                showSnackbar: (globalState.todoItems.length + 1 > MAX_NO_OF_TODO_ITEMS) ? true : false
            }))
        } else {
            setGlobalState(globalState => ({
                ...globalState,
                todoItems: [...globalState.todoItems, {created: Date.now(), text: todoItem.text}], 
            }))
        console.log(`localState: [Final]: ${JSON.stringify(todoItem)}`);
        console.log(`GlobalState [Final]: ${JSON.stringify(globalState)}`);
        }
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