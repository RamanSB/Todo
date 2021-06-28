import { Button, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/icons';
import { GlobalStateContext } from '../contexts/GlobalStateContext';
import React from 'react';


const useStyles = makeStyles(theme => ({
    displayButton: {
        color: "#000000",
        justifyContent: "flex-end",
        backgroundColor: "DimGray",
        marginRight: "auto",
        border: "1px solid white"
    }
}));

function DisplayListActionButton() {

    const { globalState, setGlobalState } = React.useContext(GlobalStateContext);

    const [actionBtnState, setActionBtnState] = React.useState({
        showModal: false,
        badgeCount: 4
    });


    const classes = useStyles();
    
    return (
        <Button
            variant="contained"
            className={classes.displayButton}
            startIcon={
                <Badge badgeContent={actionBtnState.badgeCount} showZero max={5} color="secondary" style={{flexGrow: "1", color: "white"}}>
                    <List />
                </Badge>}>
        </Button>
    );
}

export default DisplayListActionButton;