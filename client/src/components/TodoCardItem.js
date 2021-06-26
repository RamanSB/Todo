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


function TodoCardItem ({todoText}) {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" gutterBottom style={{wordWrap: "break-word"}}>{todoText}</Typography>
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
    );
}

export default TodoCardItem;