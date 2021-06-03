import {inc, dec} from './redux/actions/actionCreator'
import {useDispatch, useSelector} from 'react'

function CounterPage(){

    const dispatch = useDispatch()
    const counter = useSelector (state => state.Counter)
    return(
        <>
        <div className="container">
            <h1 className="title mb-5">{counter}</h1>
            <button color = "blue"className="btn btn-secondary  mr-5"  size = "lg" onClick={() => dispatch(inc())}>INCREMENT</button>
            <button color = "blue"className="btn btn-success" onClick={() => dispatch(dec())}>DECREMENT</button>
        </div>
        </>
    )
}
export default CounterPage