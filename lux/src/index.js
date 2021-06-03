import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <App/>,
  document.getElementById('rood'))

// import {createStore} from 'redux'

// const initialState = 0

// const reducer = (state = initialState, action) => {
//   switch (action.type){
//       case "INCREMENT": 
//           return state +1
//       case "DECREMENT":
//            return state - 1
//       default:
//           return state 
//   }
// }
// const store = createStore(reducer)

// const btnInc = document.getElementById("inc")

// document.getElementById("inc")
// .addEventListener("click", () => {
//   store.dispatch({type: "INCREMENT"})
// })
// document.getElementById("dec")
// .addEventListener("click", () => {
//   store.dispatch({type: "DECREMENT"})
// })

// store.subscribe(() =>{
//   document.getElementById('counter')
//   .innerHTML = store.getState()
// })