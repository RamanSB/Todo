import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { GlobalStateContext } from '../contexts/GlobalStateContext';
import React from 'react';



function SnackbarLimit() {

    const { globalState, setGlobalState } = React.useContext(GlobalStateContext);

    const handleSnackbarClose = () => {
        setGlobalState(state => ({...state, showSnackbar: false}));
    }
    
    return (
        <Snackbar open={globalState.showSnackbar} autoHideDuration={8000} onClose={handleSnackbarClose} message={"loool"}>
            <MuiAlert severity="warning">
                The number of to-do items is limited to a maximum of 6.
            </MuiAlert>
        </Snackbar>
    );
}                                    

export default SnackbarLimit;