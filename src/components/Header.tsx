import React from "react";
import { FaHome, FaUserAlt, FaTasks } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Header = () => {
  const isAuthorized = useSelector((state: any) => state.isAuthorized);
  return (
    <header>
      <nav>
        <Link to="/">
          <FaHome />
          <span>tasky</span>
        </Link>
        <ul>
          <li>
            <Link to="/tasks">
              <FaTasks />
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link to={isAuthorized ? "/profile" : "/login"}>
              <FaUserAlt />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
