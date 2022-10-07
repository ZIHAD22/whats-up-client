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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthUser } from "../features/chat/authUserSlice";
// TODO: in verson 2 work with profile view before login

function App() {
  const [selectedId, setSelectedId] = useState("");
  const dispatch = useDispatch()
  const selectedFriendId = (id) => {
    setSelectedId(id);
  };
  dispatch(fetchAuthUser())
  return (
    <div className="max-w-[1300px] mx-auto">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Chat
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedFriendId={selectedFriendId}
              />
            </RequireAuth>
          }
        >
          <Route
            path="chatResult/:id"
            element={<ChattingArea setSelectedId={setSelectedId} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
