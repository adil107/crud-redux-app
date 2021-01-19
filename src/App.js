import React from 'react'
import Todos from './Components/Todos'
import Store from "./Redux/Store"
import { Provider} from "react-redux";

function App() {
  return (
    <Provider store={Store}>
       <Todos/>
    </Provider>

  )
}

export default App

