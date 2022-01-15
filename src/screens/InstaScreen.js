import React from "react";
import Timeline from "../components/Timeline/Timeline";
import BottomNav from "../components/BottomNav/BottomNav";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { Link } from "react-router-dom";

export default function InstaScreen() {
  return (
    <div>
      <div className="insta-header">
        <div className="insta-search">
          <SearchIcon style={{ color: "#c2c2c2" }} />
          <input type="text" /> 
        </div>
        <div className="insta-header_avatarLogo">
          <Link to="/settingscreen">
            <AccountCircleOutlinedIcon style={{ width: 40, height: 40 }}/>
             {/* Commented out as it was replaced with Material UI Icon now
            <img
              className="avatar-img"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="avatar"
            />
            */}
          </Link>
        </div>
      </div>
      <div className="insta-li">
        <ul>
          <li className="active">Popular</li>
          <li className="">Nutrition</li>
          <li className="">Fitness</li>
          <li className="">Relationship</li>
          <li className="">Finances</li>
        </ul>
      </div>
      <div className="instascreen">
        <Timeline />
      </div>
      <BottomNav />
    </div>
  );
}
