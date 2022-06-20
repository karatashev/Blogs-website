import { useState } from "react";
import "./Menu.css"

const Menu = () => {

  const [hiddenMenu, setHiddenMenu] = useState(true)


  return (
    <div className="menu">
      <div>BLOG</div>
      <div className="btn" onClick={() => setHiddenMenu((prevState) => !prevState)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={hiddenMenu ? "menu-list hidden" : "menu-list"}>
        <li>HOMEPAGE</li>
        <li>POSTS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}
 
export default Menu;