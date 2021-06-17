import React from 'react';
import ReactDOM from 'react-dom';
import AppBarHeader from './components/AppBarHeader';
import customTheme from './styles/theme.js';
import { ThemeProvider } from '@material-ui/core/styles'

const App = () => {
    console.log(`[App]`);
    return (
        <ThemeProvider theme={customTheme}>
            <AppBarHeader/>
        </ThemeProvider>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));

export default App;