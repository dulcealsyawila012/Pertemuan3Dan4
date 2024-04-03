import React, {useState,useEffect} from "react";

function Example2 () {
    const[count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `You Click ${count} times`;
    }, [count]);
        

    return(
        <div>
            <p>You Click {count} times</p>
            <button onClick={()=> setCount(count + 1)}> Click Me</button>
        </div>
    );
}
export default Example2;