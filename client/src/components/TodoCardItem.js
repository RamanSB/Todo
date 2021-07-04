import { Card, CardContent, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalStateContext } from '../contexts/GlobalStateContext';
import React from 'react';

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
    console.log(`Id: ${id}`);
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
        console.log(`ID: ${id}`);
        setItemDone(!itemDone);
        setGlobalState(state => ({
            ...state,
            todoItems: state.todoItems.filter(todo => todo.id != id)
        }))
    }

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="overline" gutterBottom style={{wordWrap: "break-word"}}>{todoText}</Typography>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginRight: "8px" }}>
                    <Typography style={{alignSelf: "center"}} variant="overline">{formatTimestamp(timeStamp)}</Typography>
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