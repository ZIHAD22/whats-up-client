import { Route, Routes } from 'react-router-dom'
import NotFound from '../Components/NotFound'
import SignIn from '../Pages/SignIn/SignIn'
import ProfilePicUpload from '../Pages/SignUp/ProfilePicUpload'
import SignUp from '../Pages/SignUp/SignUp'
import './App.css'

console.log()

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
