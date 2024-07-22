import React from "react";
import "./SideBar.css";
import avatarDefault from "../../images/Avatar.png";

const SideBar = ({ username, avatar, onEditProfileModal, onLogout }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__info">
          {" "}
          <img
            className="sidebar__avatar"
            src={avatar || avatarDefault}
            alt="avatar"
          />
          <p className="sidebar__username">{username}</p>
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
