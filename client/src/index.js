import React from 'react';
import { AppBar, IconButton, Paper, InputBase, Toolbar, Typography, Link, Button, Icon, Badge, Grow } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import SearchIcon from '@material-ui/icons/Search';
import { ListAlt, AddToQueue, List  } from '@material-ui/icons';

import { green } from '@material-ui/core/colors';


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
    toolbarIcon: {
        marginLeft: "1px",
        color: "#efefef",
    },
    toolbarStyle: {
        backgroundImage: "linear-gradient(to right, grey, black)"
    },
    toolbarTitleContainer: {
        flexGrow: 1,
        display: "inline-flex",
        flexDirection: "row", 
        alignItems: "center"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
            width: '20ch',
            },
        }
    },
    todoItemInput: {
        textAlign: "center",
        border: "2px solid grey",
        borderRadius: "4px",
        minWidth: "600px"   
    },
    displayButton: {
        color: "#000000",
        justifyContent: "flex-end",
        backgroundColor: "white",
        marginRight: "auto",
        backgroundImage: "linear-gradient(to right, #fefefe, white)",
        
    }
}));

const App = () => {

    const classes = useStyles();

    const handleNoItemLinkClick = (event) => {
        console.log(`When this is clicked we will display an InputBase to add a Todo Item`);
    }

    return (
        <div id="root" className={classes.rootContainer}>
            <Paper elevation={2} className={classes.paperContainer}>
                <AppBar position="static">
                    <Toolbar variant="dense" className={classes.toolbarStyle}>
                        <div className={classes.toolbarTitleContainer}>
                            <Typography variant="h6">
                                ToDo
                            </Typography>
                            <IconButton edge="start" className={classes.toolbarIcon}>
                                <ListAlt/>
                            </IconButton>
                        </div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}/>
                        </div>
                    </Toolbar>
                </AppBar>
                {/* <Typography variant="subtitle1" style={{textAlign: "center", marginTop: "240px"}}>
                    It's seem like you have nothing to-do.<br/> Let's get started, click <Link onClick={handleNoItemLinkClick}>here</Link> to add something to-do.
                </Typography>
                <div style={{textAlign: "center"}}>
                    <InputBase placeholder="Add something to do; take out the trash..."  inputProps={{ style: {textAlign: 'center'} }} className={classes.todoItemInput}/>
                    <Button startIcon={<AddToQueue/>} variant="outlined"  style={{width: "100px",  marginLeft: "4px",  borderColor: "royalblue"}}>Add</Button>
                </div>
                <div style={{textAlign: "end", paddingRight: "28px", marginTop: "184px"}}>
                    <Button
                        variant="contained"
                        className={classes.displayButton}
                        startIcon={
                            <Badge badgeContent={2} showZero max={5} color="error" style={{flexGrow: "1", color: "royalblue", border: "1px solid black"}}>
                                <List />
                            </Badge>}>
                    </Button> 
                </div> */}
                <Grow
                    in={true}
                    style={{ transformOrigin: '1 1 3' }}
                    {...{ timeout: 1000 }}
                    >
                    <Paper style={{width:"700px", height: "500px", margin: "auto", marginTop:"36px", backgroundImage:"linear-gradient(to left top, slategray, darkgrey"}}  elevation={4} className={classes.paper}>
                        
                    </Paper>
                </Grow>
            </Paper>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));

export default App;