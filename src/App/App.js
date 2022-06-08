import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn/SignIn'
import './App.css'

console.log()

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
