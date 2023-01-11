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
  // const [active, setActive] = useState("Home");

  // const handleClick = (value) => {
  //   setActive(value);
  // };

  return (
    <nav className={sidebar ? " open" : "sidebar"}>
      <li>
        <MdHome size={23} />
        <span className="span">Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span className="span">Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span className="span">Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span className="span">History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span className="span">Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span className="span">I Don't Know</span>
      </li>
      <hr className="hr_tag" />
      <li>
        <MdExitToApp size={23} />
        <span className="span">LogOut</span>
      </li>
      <hr className="hr_tag" />
    </nav>
  );
};

export default Sidebar;
