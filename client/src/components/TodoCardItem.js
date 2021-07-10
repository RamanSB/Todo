import { Card, CardContent, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalStateContext } from '../contexts/GlobalStateContext';
import React from 'react';
import { deleteTodo, deleteToDo } from '../api/todo-api';

const useStyles = makeStyles(theme => ({
    card: {
        width: "180px",
        height: "220px",
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
    
    const [itemDone, setItemDone] = React.useState(false);
    const { globalState, setGlobalState } = React.useContext(GlobalStateContext);

    const classes = useStyles();
    function formatTimestamp(timeStamp) {
        let date = new Date(timeStamp);
        let minutes = (date.getMinutes()+'').length === 2 ? date.getMinutes() : '0'+date.getMinutes();
        let dateString = `${date.getDate()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${minutes}`;
        return dateString;
    }

    const onCheckItem = (event) => {    
        let completedTodo = globalState.todoItems.filter(todo => todo._id === id)[0];
        deleteTodo(completedTodo);    
    
        setGlobalState(state => {
            console.log(`Id: ${id}`);
            console.log(`[onCheckItem] State: ${JSON.stringify(state)}`)
            return ({
                ...state,
                todoItems: state.todoItems.filter(todo => todo._id != id),
            });
        });

        
    }

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="overline" gutterBottom style={{wordWrap: "break-word"}}>{todoText}</Typography>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginRight: "8px" }}>
                    <Typography style={{fontSize: "11px", alignSelf: "center"}} noWrap variant="overline">{formatTimestamp(timeStamp)}</Typography>
                    <FormControlLabel
                        labelPlacement="start"                              
                        control = {
                            <Checkbox
                                checked={itemDone}
                                onChange={onCheckItem}
                                name="checked-item"/>
                            }>
                    </FormControlLabel>
                </div>
            </CardContent>
        </Card>
    );
}

export default TodoCardItem;