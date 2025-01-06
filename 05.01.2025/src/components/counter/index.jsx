import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../../redux/features/Counter"

const Counter = () => {
    const count = useSelector((state)=> state.counter)

    const dispatch = useDispatch()
  return (
    <>
    <button onClick={() => { dispatch(increment())}}>Increment</button>
    <h1>{count.val}</h1>
    <button  onClick={() => { dispatch(decrement())}}>decrement</button>
    <button  onClick={() => { dispatch(reset())}}>reset</button>
    </>
  )
}

export default Counter