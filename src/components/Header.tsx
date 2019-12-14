import React from "react";
import { FaHome, FaUserAlt, FaTasks } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppHeader, AppLinks, AppLogo } from "../styles/HeaderStyle";
import { IState } from "../interfaces/interfaces";
export const Header = () => {
  const isAuthorized = useSelector((state: IState) => state.isAuthorized);

  return (
    <AppHeader data-testid="header">
      <nav>
        <AppLogo>
          <Link to="/" className="logo">
            <FaHome />
            <span>tasky</span>
          </Link>
        </AppLogo>
        <AppLinks>
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
        </AppLinks>
      </nav>
    </AppHeader>
  );
};
