import React from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import useAuthUser from "../../hooks/useAuthUser";
import logOut from "../../util/logOut";

const SettingsModal = ({ setSettingsModa }) => {
  const navigate = useNavigate();
  const [user, loading] = useAuthUser();

  return (
    <div>
      <input type="checkbox" id="settings-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {user.user?.name} <span className="text-red-500">Warning</span> Your
            Are Supouse To be Log Out
          </h3>
          <div className="modal-action">
            <button
              onClick={() => {
                logOut();
                setSettingsModa(false);
                navigate("/signIn");
              }}
              className="btn bg-red-600 outline-hidden"
            >
              Log Out
            </button>
            <button
              onClick={() => setSettingsModa(false)}
              htmlFor="settings-modal"
              className="btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
