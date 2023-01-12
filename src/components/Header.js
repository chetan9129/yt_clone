import React from "react";
import "../css/header.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className=" header">
      <div className="header__menu_div">
        <FaBars
          className="header__menu"
          size={24}
          onClick={() => handleToggleSidebar()}
        />
      </div>
      <img
        src="./yt_logo.png"
        alt=""
        className="
        header__logo"
        height={65}
        width={124}
      />
      <form>
        <input className="input_search" type="search" placeholder="Search" />
        <button>
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps className="hamburger" size={28} />
        <RxAvatar className="avatar__logo" size={28} />
      </div>
    </div>
  );
};

export default Header;
