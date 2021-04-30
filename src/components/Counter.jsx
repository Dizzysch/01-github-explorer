import { useState } from 'react'

export function Counter(){
    const [ counter, setCounter ] = useState(19);

    function increment (){
        setCounter(counter*counter)
        console.log('gui da a bundinha')
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button 
                type="button"
                onClick={increment}>

            Increment</button>
        </div>
    )
}