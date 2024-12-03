import React from "react";
import "./HeaderTable.css";
import search from "../../assets/search.svg";
import { Button } from "@mui/material";
import icon from "../../assets/icon.svg";

const headertable = () => {
  return (
    <div className="companybar">
      <div className="top-bar">
        <p className="allcompanies">All Companies</p>
        <div className="add-exp-btn">
          <button className="export-btn">
            <img src={icon} alt="" />
            <p className="export-text"> Export</p>
          </button>
          <button className="add-user-btn">
            <p className="add-user-txt">+ Add User</p>
          </button>
        </div>
      </div>

      <div>
        <ul className="nav-list-roles">
          <li>All</li>
          <li>Auction Managers</li>
          <li>Auctioneering Managers</li>
          <li>Advert Supervisors</li>
        </ul>
        <hr/>
        <br />
        <div className="filter-box">

        </div>
        <div className="company-search-container"style={{position: 'relative'}}>
          <img src={search} alt="" className="search-container-company" style={{position: 'absolute' ,left: '2px', top: '5px'}}   />
          <input
          
            placeholder="Search users by Name, Email or Date "
            className="search-input-box"
          />
        </div>
      </div>
    </div>
  );
};

export default headertable;
