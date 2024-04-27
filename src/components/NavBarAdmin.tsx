import { useState } from "react";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";

interface NavBarProps {
  heading: string;
  navItems: string[];
  onSelectNavItem: (item: number) => void;
  onClickNotification: (nv: boolean) => void;
  setNotificationMadalVisibility: boolean;
  onLogOutClick: () => void;
}

const NavBar = ({
  heading,
  navItems,
  onSelectNavItem,
  onClickNotification,
  setNotificationMadalVisibility,
  onLogOutClick,
}: NavBarProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [notificationModelVisibility, setnotificationModelVisibility] =
    useState(false);
  
  const notificationOnClick = () => {
    setnotificationModelVisibility(!notificationModelVisibility);
    onClickNotification(!notificationModelVisibility);
  };
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
          <div>
            <button
              className="btn btn-outline-light me-2"
              onClick={notificationOnClick}
            >
              {!notificationModelVisibility && (
                <div>
                  <IoIosNotificationsOutline />
                </div>
              )}
              {notificationModelVisibility && (
                <div>
                  <IoIosNotifications />
                </div>
              )}
            </button>
            <button className="btn btn-outline-light" onClick={onLogOutClick}>
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
