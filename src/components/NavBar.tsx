import { useState } from "react";
interface NavBarProps {
  heading: string;
  navItems: string[];
  onSelectNavItem: (item: number) => void;
}

const NavBar = ({ heading, navItems, onSelectNavItem }: NavBarProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            {heading}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav flex-row">
              {navItems.map((item, index) => (
                <li className="nav-item me-2" key={item}>
                  <a
                    className={
                      selectedIndex === index ? "nav-link active" : "nav-link"
                    }
                    onClick={() => {
                      setSelectedIndex(index);
                      onSelectNavItem(index);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
