import React from 'react';
import { Paper, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Appbar from './components/Appbar';
import TodoItemInput from './components/TodoItemInput';
import DisplayListActionButton  from './components/DisplayListActionButton';
import TodoListModal from './modals/TodoListModal';
import GlobalStateContextProvider from './contexts/GlobalStateContext';


const useStyles = makeStyles((theme) => ({
    rootContainer: {
        display: "flex",
        justifyContent: "center"        
    },
    paperContainer: {
        width: "800px",
        height: "640px",
        marginTop: "80px",
        backgroundImage: "linear-gradient(to top left, darkgrey, #d3d3d9)"
    },
    gridItem: {
        color: "azure",
        "& .MuiGrid-item" : {
            padding: "8px"
        }
    }
}));

const App = () => {

    const handleNoItemLinkClick = (event) => {
        console.log(`When this is clicked we will display an InputBase to add a Todo Item`);
    }

    const classes = useStyles();
    return (
        <GlobalStateContextProvider>
            <div id="root" className={classes.rootContainer}>
                <Paper elevation={2} className={classes.paperContainer}>
                    <Appbar/>
                    <Typography variant="subtitle1" style={{textAlign: "center", marginTop: "240px"}}>
                        It's seem like you have nothing to-do.<br/> Let's get started, click <Link onClick={handleNoItemLinkClick}>here</Link> to add something to-do.
                    </Typography>
                    <TodoItemInput/>
                    <div style={{textAlign: "end", paddingRight: "28px", marginTop: "184px"}}>
                        <DisplayListActionButton/>
                    </div>
                    {/* <TodoListModal/> */}
                </Paper>
            </div>
        </GlobalStateContextProvider>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));

export default App;