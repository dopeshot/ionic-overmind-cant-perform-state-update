import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createActionsHook, createStateHook, Provider } from 'overmind-react'
import { createOvermind, IContext } from 'overmind'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const state = {
  count: 0
}
const actions = {
  increaseCount({ state }: Context) {
    state.count++;
  },
  decreaseCount({ state }: Context) {
    state.count--;
  }
}
export type Context = IContext<{
  state: typeof state,
  actions: typeof actions,
}>


const overmind = createOvermind({
  state,
  actions
}
, {
  devtools: true
})

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
