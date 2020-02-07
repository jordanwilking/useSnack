import React from 'react'
import './App.css'
import SnackTest from './SnackTest'
import { SnackBarProvider } from './SnackContextProvider'

function App() {
  return (
    <SnackBarProvider>
      <div className='App'>
        <SnackTest />
      </div>
    </SnackBarProvider>
  )
}

export default App
