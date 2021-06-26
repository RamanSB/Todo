import React from 'react';
import { AppBar, IconButton, Paper, InputBase, Toolbar, Typography, Link, Button, Icon, Badge, Grow, Card, CardContent, FormControlLabel, Checkbox, Grid } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import SearchIcon from '@material-ui/icons/Search';
import { ListAlt, Add, List, CheckBox  } from '@material-ui/icons';



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
        backgroundColor: "DimGray",
        marginRight: "auto",
        border: "1px solid white"
    },
    gridItem: {
        color: "azure",
        "& .MuiGrid-item" : {
            padding: "8px"
        }
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
                <Typography variant="subtitle1" style={{textAlign: "center", marginTop: "240px"}}>
                    It's seem like you have nothing to-do.<br/> Let's get started, click <Link onClick={handleNoItemLinkClick}>here</Link> to add something to-do.
                </Typography>
                <div style={{textAlign: "center"}}>
                    <InputBase placeholder="Add something to do; take out the trash..."  inputProps={{ style: {textAlign: 'center'} }} className={classes.todoItemInput}/>
                    <IconButton style={{border: "1px solid white", backgroundColor:"DimGray", marginLeft:"4px"}}>
                        <Add style={{color: "#ffffff"}}/>
                    </IconButton>
                
                </div>
                <div style={{textAlign: "end", paddingRight: "28px", marginTop: "184px"}}>
                    <Button
                        variant="contained"
                        className={classes.displayButton}
                        startIcon={
                            <Badge badgeContent={2} showZero max={5} color="secondary" style={{flexGrow: "1", color: "white"}}>
                                <List />
                            </Badge>}>
                    </Button> 
                </div>
                {/* <Grow
                    in={true}
                    style={{ transformOrigin: '1 1 3' }}
                    {...{ timeout: 1000 }}
                    >
                    <Paper style={{width:"700px", height: "500px", margin: "auto", marginTop:"64px", padding: "8px", backgroundImage:"linear-gradient(to left top, slategray, darkgrey)"}}  elevation={4} className={classes.paper}>
                        
                    <Grid style={{marginTop:"6px", marginLeft: "20px", margin: "auto", justifyContent:"start"}} container spacing={4}>
                        <Grid className={classes.gridItem} item>
                            <Card style={{width:"180px", height: "220px", backgroundColor: "white"}}>
                                <CardContent style={{width: "150px", height: "190px", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                                    <Typography variant="body2" gutterBottom style={{wordWrap: "break-word"}}>An example todo item - take out the trash</Typography>
                                    <FormControlLabel
                                        labelPlacement="start"
                                        label={<Typography variant="subtitle2">DONE</Typography>}                                
                                        control = {
                                            <Checkbox
                                                checked={true}
                                                //onChange={}
                                                name="checked-item"/>
                                            }>
                                    </FormControlLabel>
                                </CardContent>
                            </Card>
                        </Grid>
            
                    </Grid>
                    </Paper>
                </Grow> */}
            </Paper>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));

export default App;