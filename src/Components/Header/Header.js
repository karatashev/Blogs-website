import "./Header.css";
import { useState } from "react";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const Header = () => {
  const [currentHeader, setCurrentHeader] = useState(2);
  const titles = [
    {
      id: 0,
      text: "Welcome to Blogs",
    },
    {
      id: 1,
      text: "Best Blog Post",
    },
    {
      id: 2,
      text: "Best Blog Page",
    },
    {
      id: 3,
      text: "Best React Blog",
    },
  ];

  return (
    <div className="header">
      <div
        className="left"
        onClick={() => {
          if (currentHeader === 0) {
            setCurrentHeader(titles.length - 1);
          } else {
            setCurrentHeader((prevHeader) => prevHeader - 1);
          }
        }}
      >
        {"<"}
      </div>
      <div
        className="right"
        onClick={() => {
          if (currentHeader === titles.length - 1) {
            setCurrentHeader(0);
          } else {
            setCurrentHeader((prevHeader) => prevHeader + 1);
          }
        }}
      >
        {">"}
      </div>
      <div className="wrapper" style={{ right: `${100 * currentHeader}%` }}>
        {titles.map((title) => (
          <HeaderTitle title={title.text} key={title.id}/>
        ))}
      </div>
    </div>
  );
};

export default Header;
