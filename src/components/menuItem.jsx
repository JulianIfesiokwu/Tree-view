import { useState } from "react";
import MenuList from "./menuList";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const toggleDisplayChildern = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <p
        style={{
          cursor: "pointer",
        }}
        onClick={() => toggleDisplayChildern(item.label)}
      >
        {item.label}{" "}
        {item && item.children && item.children.length ? (
          <span>{displayCurrentChildren[item.label] ? "-" : "+"}</span>
        ) : null}
      </p>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList menu={item.children} />
      ) : null}
    </div>
  );
};

export default MenuItem;
