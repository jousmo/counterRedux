import { createStore } from 'redux'

const contador = document.getElementById('counter')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')

// State
const INITIAL_STATE = {
  counter: 0
}

// Eventos JS
increment.addEventListener('click', () => {
  // Redux: Enviando Actions -> Reducers
  store.dispatch({ type: 'INCREMENT' })
})

decrement.addEventListener('click', () => {
  // Redux: Enviando Actions -> Reducers
  store.dispatch({ type: 'DECREMENT' })
})

// Redux: Reducers
const counterApp = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}

// Redux: Create Store
const store = createStore(counterApp)

// Redux: Subscribe
store.subscribe(() => {
  // Redux: Obtenemos el State
  const { counter } = store.getState()
  contador.innerText = counter
})
