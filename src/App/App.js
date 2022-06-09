import { Route, Routes } from 'react-router-dom'
import NotFound from '../Components/NotFound'
import Chat from '../Pages/Chat/Chat'
import ChattingArea from '../Pages/Chat/ChattingArea'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp'
import './App.css'

// TODO: in verson 2 work with profile view before login

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/chat" element={<Chat />}>
          <Route path="chatResult" element={<ChattingArea />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
