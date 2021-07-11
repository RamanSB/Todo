import { Card, CardContent, Typography, FormControlLabel, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalStateContext } from '../contexts/GlobalStateContext';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { deleteTodo } from '../api/todo-api';

const useStyles = makeStyles(theme => ({
    card: {
        width: "180px",
        height: "220px",
        backgroundImage: "linear-gradient(to top left, slategrey, hotpink)",
        backgroundColor: "white"
    },
    cardContent: {
        width: "150px",
        height: "190px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
}));


function TodoCardItem({todoText, timeStamp, id}) {
    
    const { globalState, setGlobalState } = React.useContext(GlobalStateContext);

    const classes = useStyles();
    // Intended to use moment library however some articles suggest it's no longer useful/relevant 
    function formatTimestamp(timeStamp) {
        let date = new Date(timeStamp);
        let minutes = (date.getMinutes()+'').length === 2 ? date.getMinutes() : '0'+date.getMinutes();
        let dateString = `${date.getDate()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${minutes}`;
        return dateString;
    }

    const onCheckItem = async (event) => {    
        // Attempted to use _id value, but caused errors - relying on the fact no one will create a TodoItem with the same textContent
        let completedTodo = globalState.todoItems.filter(todo => todo.text === todoText)[0];
        await deleteTodo(completedTodo);    
    
        setGlobalState(state => {
            return ({
                ...state,
                todoItems: state.todoItems.filter(todo => todo.text !== todoText),
            });
        });
    }

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="overline" gutterBottom style={{wordWrap: "break-word", color:"white"}}>{todoText}</Typography>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginRight: "8px" }}>
                    <Typography style={{color: "white", fontSize: "11px", alignSelf: "center"}} noWrap variant="overline">{formatTimestamp(timeStamp)}</Typography>
                    <FormControlLabel
                        labelPlacement="start"                              
                        control = {
                            <IconButton size="small" onClick={onCheckItem} style={{color:"white"}}>
                                <DeleteIcon />
                            </IconButton>
                            }
                    />
                </div>
            </CardContent>
        </Card>
    );
}

export default TodoCardItem;