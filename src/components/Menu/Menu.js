import "./menu.css";

const Menu = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "menu__content active" : "menu__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Menu;
