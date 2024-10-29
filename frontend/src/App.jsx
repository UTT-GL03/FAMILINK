import { useState } from 'react'
import Header from './Components/Header'
import Discussion from './Components/Discussion.jsx'
import MessageBox from './Components/MessageBox.jsx'
import './App.css'

function App() {
  return (
    <div className = "components">
      <Header />
      <div className = "components">
        <Discussion />
        <MessageBox />
      </div>
    </div>
  )
}

export default App
