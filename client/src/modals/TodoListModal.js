import { Grow, Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TodoCardItem from '../components/TodoCardItem';
import { GlobalStateContext } from '../contexts/GlobalStateContext';
import React from 'react';

const useStyles = makeStyles(theme => ({
    growTransition: {
        transformOrigin: '1 1 3',
        border: "1px solid white",
        borderRadius: "12px"
    },
    gridItem: {
        color: "azure",
        display: "flex",
        justifyContent: "center",
        "& .MuiGrid-item" : {
            padding: "8px"
        }
    },
    gridContainer: {
        marginTop: "6px",
        flexWrap: "wrap",
        overflow: "auto",
        padding: "4px",
        justifyContent: "start",
        maxHeight: "100%",
        display: "flex",
        direction: "row",
    },
    buttonStyle: {
        backgroundColor: "DimGray",
        border: "2px solid white",
        borderRadius: "4px",
        color: "white",
        elevation: "12px"
    }
}));

function BackButtonGrid() {
    const { setGlobalState } = React.useContext(GlobalStateContext);
    const handleBackClick = () => {
        setGlobalState(state => ({
            ...state,
            showModal: false,
            searchKey: ""
        }));
    }
    const classes = useStyles();
    return (
        <Grid container item xs={12} >
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <Button elevation={12} className={classes.buttonStyle} fullWidth variant="contained" onClick={handleBackClick}>BACK</Button>
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    );
}

function TodoListModal() {

    const { globalState } = React.useContext(GlobalStateContext);

    const classes = useStyles();
    const searchPredicate = todo => {
        console.log(`[SearchKey] ${globalState.searchKey}`);
        console.log(`GlobalState: ${JSON.stringify(globalState)}`)
        if (globalState.searchKey === '') {
            return true;
        } else {
            return todo.text.toLowerCase().indexOf(globalState.searchKey.toLowerCase()) !== -1;
        }
    }

    return (
        <Grow
            in={true}
            className={classes.growTransition}
            timeout={1200}>
            <Paper style={{width:"700px", height: "500px", margin: "auto", marginTop:"24px", padding: "8px", backgroundImage:"linear-gradient(to left top, slategray, darkgrey)"}}  elevation={4}>     
                    <Grid spacing={3} className={classes.gridContainer} container alignItems="stretch">
                            {globalState.todoItems
                                .filter(searchPredicate)
                                .map(todo => (
                                    <Grid className={classes.gridItem} xs={4} item key={globalState.todoItems.indexOf(todo)} >
                                        <TodoCardItem todoText={todo.text} timeStamp={todo.created} id={todo._id}/>
                                    </Grid>
                            ))}
                    </Grid>
                    {globalState.todoItems.filter(searchPredicate).length >=1 & globalState.todoItems.filter(searchPredicate).length <=3 ? 
                    <>
                        <div style={{minHeight:"220px", display:"block"}}></div>
                        <BackButtonGrid/>
                    </> : <BackButtonGrid/>}
            </Paper>
            
            
        </Grow>
        
    );
}

export default TodoListModal;