import { Button, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/icons';

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
    const classes = useStyles();
    return (
        <Button
            variant="contained"
            className={classes.displayButton}
            startIcon={
                <Badge badgeContent={2} showZero max={5} color="secondary" style={{flexGrow: "1", color: "white"}}>
                    <List />
                </Badge>}>
        </Button>
    );
}

export default DisplayListActionButton;