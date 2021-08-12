import React, { useCallback, useState } from 'react';


const App = () => {
    const [number, setNumber] = useState(0);
    const counter = useCallback(() =>{
        setNumber((number) => number + 1);
    },[number])
    return ( 
        <React.Fragment>
        <div>welcome to react ssr</div>
        <button onClick={counter}>{number}</button>
        </React.Fragment>
     );
}
 
export default App;