import React from 'react';
import { Paper, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Appbar from './components/Appbar';
import TodoItemInput from './components/TodoItemInput';
import DisplayListActionButton  from './components/DisplayListActionButton';
import TodoListModal from './modals/TodoListModal';
import GlobalStateContextProvider from './contexts/GlobalStateContext';
import { GlobalStateContext } from './contexts/GlobalStateContext';
import SnackbarLimit from './components/Snackbar';
import { getAllTodos } from './api/todo-api'


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
        setAppState(state => ({
            ...state,
            showInput: true
        }));
    }
    
    const [appState, setAppState] = React.useState({
        showInput: false,
    });

    const { globalState, setGlobalState } = React.useContext(GlobalStateContext);
    React.useEffect(async function() {
        console.log(`Obtaining all todo list items in the DB when index.js App component is mounted`);
        let allTodos = await (await getAllTodos()).data;        
        console.log(`HTTP Request: ${JSON.stringify(allTodos)}`);
        setGlobalState(state => ({...globalState, todoItems: allTodos}))
    }, [])

    
    const classes = useStyles();
    return (
            <div id="root" className={classes.rootContainer}>
                <Paper elevation={2} className={classes.paperContainer}>
                    <Appbar/>
                    <GlobalStateContext.Consumer>
                        { contextValue => {                                
                            return (
                                contextValue.globalState.showModal ? <TodoListModal/> :
                                (contextValue.globalState.todoItems.length === 0 && !appState.showInput ?
                                <Typography variant="h5" style={{textAlign: "center", marginTop: "240px"}}>
                                    It's seem like you have nothing to-do.<br/> Let's get started, click <Link onClick={handleNoItemLinkClick}>here</Link> to add something to-do.
                                </Typography> : <TodoItemInput/> )
                            );
                            }
                        }
                    </GlobalStateContext.Consumer>
                    <GlobalStateContext.Consumer>
                        {contextValue => {
                            return (!contextValue.globalState.showModal ? 
                                <div style={{textAlign: "end", paddingRight: "28px", marginTop: "184px"}}>
                                    <DisplayListActionButton/>
                                </div> : <></>);
                        }}
                    </GlobalStateContext.Consumer>
                    <SnackbarLimit/>
                </Paper>
            </div>
    );
}

ReactDOM.render(
    (<><GlobalStateContextProvider>
        <App/>
    </GlobalStateContextProvider></>), document.querySelector('#root'));

export default App;