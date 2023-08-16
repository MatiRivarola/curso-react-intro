import React from "react";

const TodoContext = React.createContext();

function TodoProvider(){
    return(
        <TodoContext.Provider>

        </TodoContext.Provider>
    );
};


export {TodoContext , TodoProvider};