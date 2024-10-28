import "./UserProfile.css";
import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import {  Outlet } from "react-router-dom";

import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  let { currentUser } = useContext(userLoginContext);
  let navigate = useNavigate();

  function onEditUser() {
    navigate("../edit-user");
  }

  return (
    <div>
      <div className="text-end text-end p-3">
        <img
          src={currentUser.profileImage}
          width="75px"
          alt=""
          className="rounded-circle"
        />
        <p className="fs-3">
          {currentUser.username}
          <CiEdit className="text-warning fs-2" onClick={onEditUser} />
        </p>
      </div>


      <Outlet />
    </div>
  );
}

export default UserProfile;