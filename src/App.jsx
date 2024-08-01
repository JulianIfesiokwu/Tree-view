import MenuList from "./components/menuList";
import menu from "./treeview";
import "./App.css";

function App() {
  return (
    <>
      <MenuList menu={menu} />
    </>
  );
}

export default App;
