import React, {useState} from "react";

function Example () {
    const[count,setCount] = useState(0);
    return(
        <div>
            <p>You Click {count} times</p>
            <button onClick={()=> setCount(count + 1)}> Click Me</button>
        </div>
    )
}
export default Example;