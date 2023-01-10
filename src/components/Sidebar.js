import React from "react";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import "../css/sidebar.css";

const Sidebar = ({ sidebar }) => {
  return (
    <nav
      className={sidebar ? "open" : "sidebar"}
      // onClick={() => handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I Don't Know</span>
      </li>
      <hr className="hr_tag" />
      <li>
        <MdExitToApp size={23} />
        <span>LogOut</span>
      </li>
      <hr className="hr_tag" />
    </nav>
  );
};

export default Sidebar;
