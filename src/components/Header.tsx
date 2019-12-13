import React from "react";
import { FaHome, FaUserAlt, FaTasks } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AppHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 10vh;
  background-color: #333;
  nav {
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 2vw;
    color: #fff;
    font-size: 2.2vw;
    height: 100%;
    text-transform: capitalize;
    @media (min-width: 992px) {
      font-size: 1.2vw;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      font-size: 4vw;
    }
    @media (max-width: 767px) {
      font-size: 3vw;
    }
  }
`;
const AppLogo = styled.div`
  .logo {
    display: flex;
    align-items: center;
    span {
      margin-left: 0.3vw;
      text-transform: uppercase;
    }
  }
`;
const AppLinks = styled.ul`
  display: flex;
  align-items: center;
  li:last-child {
    margin-left: 1vw;
  }
  li {
    diplay: flex;
    align-items: center;
    span {
      margin-left: 0.3vw;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    li:last-child {
      margin-left: 0;
    }
    li {
      margin-top: 1vh;
    }
  }
`;
export const Header = () => {
  const isAuthorized = useSelector((state: any) => state.isAuthorized);

  return (
    <AppHeader>
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
