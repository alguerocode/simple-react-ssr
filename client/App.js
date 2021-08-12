import React, { useCallback, useState } from 'react';


const App = () => {
    const [number, setNumber] = useState(0);
    const counter = useCallback(() =>{
        setNumber(number + 1);
    },[number]);

    return ( 
        <>
        <div>welcome to react ssr</div>
        <button onClick={counter}>{number}</button>
        </>
     );
}
 
export default App;