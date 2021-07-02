import { Card, CardContent, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        width: "180px",
        height: "220px",
        backgroundColor: "white"
    },
    cardContent: {
        width: "150px",
        height: "190px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
}));


function TodoCardItem ({todoText, timeStamp}) {

    const classes = useStyles();
    function formatTimestamp(timeStamp) {
        let date = new Date(timeStamp);
        let dateString = `${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        return dateString;
    }

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="overline" gutterBottom style={{wordWrap: "break-word"}}>{todoText}</Typography>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginRight: "8px" }}>
                    <Typography style={{alignSelf: "center"}} variant="overline">{formatTimestamp(timeStamp)}</Typography>
                    <FormControlLabel
                        labelPlacement="start"                              
                        control = {
                            <Checkbox
                                checked={true}
                                //onChange={}
                                name="checked-item"/>
                            }>
                    </FormControlLabel>
                </div>
            </CardContent>
        </Card>
    );
}

export default TodoCardItem;