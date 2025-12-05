import React from "react";

const App=()=>{

     let [count ,setCount]=React.useState (0)



    return(
        <div>hello from app component HOOK KA HAI {count}</div>

    )
}   
export default App;


// LET [VARIABAL ,FUNCTION TO UPDATE THE VARIABAL]=USESTATE (INITIAL VALUE)