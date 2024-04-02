import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu-list">
        <a href="">
          <img src="src/assets/icon/element-equal.png" alt="" />
          <li>Dashboard</li>
        </a>
        <Link to="/income">
          <img src="src/assets/icon/Group.png" alt="" /> <li>Income</li>
        </Link>
        <Link to="/project">
          <img src="src/assets/icon/project.svg" alt="" /> <li>Project</li>
        </Link>
        <Link to="/timesheet">
          <img src="src/assets/icon/money-time.png" alt="" />{" "}
          <li>Time sheet</li>
        </Link>
        <Link to="/profile">
          <img src="src/assets/icon/user-octagon.png" alt="" /> <li>Profile</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
