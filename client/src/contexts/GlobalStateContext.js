import React from 'react';

export const GlobalStateContext = React.createContext();

const GlobalStateContextProvider = (props) => {
    
    const [globalState, setGlobalState] = React.useState({
        showModal: false,
        todoItems: []
    });

    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
            {props.children} {/* Renders all of the child (nested) elements inside the provider */}
        </GlobalStateContext.Provider>
    );

};

export default GlobalStateContextProvider;