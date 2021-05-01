import { useState } from 'react'

export function Counter(){
    const [ counter, setCounter ] = useState(1);

    function increment (){
        setCounter(counter+1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button 
                type="button"
                onClick={increment}>

            Click Me</button>
        </div>
    )
}