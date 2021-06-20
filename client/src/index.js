import React from 'react';
import { AppBar, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { ListAlt } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles({
    rootContainer: {
        display: "flex",
        justifyContent: "center"
    },
    paperContainer: {
        width: "800px",
        height: "640px",
        marginTop: "80px",
        backgroundColor: "#fefe"
    },
    toolbarIcon: {
        marginLeft: "1px",
        color: "#efefef"
    }
})

const App = () => {

    const classes = useStyles();

    return (
        <div id="root" className={classes.rootContainer}>
        <Paper elevation={2} className={classes.paperContainer}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6">
                        ToDo
                    </Typography>
                    <IconButton edge="start" className={classes.toolbarIcon}>
                        <ListAlt/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Paper>
        </div>

     
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));

export default App;