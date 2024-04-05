import React from "react";
import "./Sidebar.css";
import avatar from "../../images/Avatar.png";

const Sidebar = ({ username }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img src={avatar} alt="avatar" />
        <p className="sidebar__username">{username}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
