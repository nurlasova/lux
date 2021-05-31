import { useState } from "react"

function Home () {
    let initialState = 0
const reducer = (state=0, action) => {
    if (action, type === "INCREMENT"){
        return state +1
    }
}
 let state = reducer(state, {type: "INCREMENT"})
 console.log(state)

const [state, setState] = useState(0)
const countSumm =() => {
    setState(state+2)
}

    return(
        <div className="home">
              <h3>{state}</h3>
              <button onClick={countSumm} className="btn">Add</button>
        </div>
    )
}
export default Home