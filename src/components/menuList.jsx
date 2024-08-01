import menu from "../treeview.js";
import MenuItem from "./menuItem";

export default function MenuList({ menu = [] }) {
  return (
    <div className='menu-list-container'>
      {menu && menu.length
        ? menu.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
            />
          ))
        : null}
    </div>
  );
}
