### Overview
This project represents a full-stack ToDo App that I have created using the MERN stack. 


Project has been deployed using heroku and can be found here: https://ramansb-todo.herokuapp.com/


MongoDB has been used as the database that stores the TodoModel collections defined using the mongoose library.


Server side code such as defining routes, controller functionality & configuring the server app (i.e. listening at ports, ensuring server app supports CORS) has been acheived using the express library.


React has been used for the front-end development. The MaterialUI library has also been used.

### Demo
![Demonstrating App](https://github.com/RamanSB/Todo/blob/master/client/public/demo-todo.gif)


### State Management
Reacts createContext & useContext hooks hae been used to help manage state.


The createContext hook was initially used to create a Context object within the contexts/GlobalStateContext.js file, here in this file we create a function that creates a globalState object (using React.useState) (The state and state setter are returned in an array). We then provide these values to the Provider property/object of the context we had created.

This GlobalStateContextProvider will be exported to the class that renders the root component, the GlobalStateContextProvider will wrap around the root component, thus becoming the root component such that all child components can access the values within the provider, the globalState & it's setter.
