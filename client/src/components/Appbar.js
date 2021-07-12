import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@material-ui/core';
import { ListAlt } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { GlobalStateContext } from "../contexts/GlobalStateContext";


const useStyles = makeStyles(theme => ({
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
    }
}));

function Appbar() {

    const { globalState, setGlobalState } = React.useContext(GlobalStateContext);
    
    const handleSearchInput = (event) => {
        console.log(`Event: ${event.target.value}`);
        setGlobalState(state => {
            if(event.target.value !== ''){
                return ({...state, searchKey: event.target.value.toString().trim()});
            }
            return ({...state, searchKey: ""});
        });
    }

    const classes = useStyles();
    return (
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
                { globalState.showModal ?
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        onChange={handleSearchInput}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}/>
                </div> : <></>}
            </Toolbar>
        </AppBar>
    );
}

export default Appbar;