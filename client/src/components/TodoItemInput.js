import { InputBase, IconButton, Badge } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    todoItemInput: {
        textAlign: "center",
        border: "2px solid grey",
        borderRadius: "4px",
        minWidth: "600px"   
    }
}));

function TodoItemInput() {
    
    const classes = useStyles(); 
    return (        
            <div style={{textAlign: "center"}}>
                <InputBase placeholder="Add something to do; take out the trash..."  inputProps={{ style: {textAlign: 'center'} }} className={classes.todoItemInput}/>
                <IconButton style={{border: "1px solid white", backgroundColor:"DimGray", marginLeft:"4px"}}>
                    <Add style={{color: "#ffffff"}}/>
                </IconButton>    
            </div>
    );
}

export default TodoItemInput;