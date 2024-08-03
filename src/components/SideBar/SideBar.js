import React, { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./SideBar.css";
import avatarDefault from "../../images/Avatar.png";

const SideBar = ({ onEditProfileModal, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__info">
          {" "}
          <img
            className="sidebar__avatar"
            src={currentUser?.avatar || avatarDefault}
            alt="avatar"
          />
          <p className="sidebar__username">{currentUser?.username}</p>
        </div>
        <button
          className="sidebar__button sidebar__edit-profile"
          onClick={onEditProfileModal}
        >
          Change profile data
        </button>
        <button className="sidebar__button sidebar__logout" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
