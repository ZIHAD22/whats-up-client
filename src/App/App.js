import { Route, Routes } from "react-router-dom";
import NotFound from "../Components/NotFound";
import Chat from "../Pages/Chat/Chat";
import ChattingArea from "../Pages/Chat/ChattingArea";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import "./App.css";
import "tw-elements";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "../Components/RequireAuth";
// TODO: in verson 2 work with profile view before login

function App() {

  return (
    <div className="max-w-[1300px] mx-auto">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Chat />
            </RequireAuth>
          }
        >
          <Route
            path="chatResult/:conversationUserId"
            element={<ChattingArea />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
