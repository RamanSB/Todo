import { AppBar, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import { green, grey, red } from '@material-ui/core/colors';
import { fade,  makeStyles } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: 600,
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },  
}));

const AppBarHeader = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <div style={{display:"inline-flex", alignItems:"center", flexGrow: 1}}>
                    <Typography variant="h6" className={classes.title}>
                        ToDo App
                    </Typography>
                    <IconButton disabled size="medium" className={classes.titleIcon}>
                        <ListAltIcon style={{ color:"white"}}/>
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
    );
}

export default AppBarHeader