import React from "react";
import { Link } from "react-router-dom";

import TopMenuAccount from "./TopMenuAccount";
import "./TopMenu.css";
import { useSelector } from "react-redux";
import {
  IStateType,
  IRootPageStateType,
} from "../../store/models/root.interface";

const TopMenu: React.FC = () => {
  const page: IRootPageStateType = useSelector(
    (state: IStateType) => state.root.page
  );

  return (
    <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top">
      <ol className="breadcrumb breadcrumb-none">
        <li className="breadcrumb-item">
          {/*  <a href="# ">{page ? page.area : null}</a> */}
          <Link to={`/Home`}>
            <span>{page ? page.area : null}</span>
          </Link>
        </li>
        <li className="breadcrumb-item">
          <a href="# ">{page ? page.subArea : null}</a>
        </li>
      </ol>

      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>
        <TopMenuAccount />
      </ul>
    </nav>
  );
};

export default TopMenu;
