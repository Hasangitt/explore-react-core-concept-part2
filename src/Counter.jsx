import { useState } from "react"

export default function Counter(){
    
    const [count, setCount] = useState(0);
    
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        // setCount(newCount);
        if(newCount < 0){
            alert('select')
        }
        else{
            return setCount(newCount);
        }
        
    }

    return(
        <div style={{border: '5px solid', borderRadius: '10px', backgroundColor: 'tomato'}}>
            <h3>Counter: {count} </h3>
            <button style={{marginRight: '5px'}} onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>REDUCE</button>
        </div>
    )
}