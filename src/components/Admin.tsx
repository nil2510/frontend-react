import { useState } from "react";
import NavBarAdmin from "./NavBarAdmin";
import NotificationModal from "./NotificationModal";

interface AdminProps {
  onLogOut: () => void;
}

const Admin = ({ onLogOut }: AdminProps) => {
  const [notificationModelVisibility, setnotificationModelVisibility] =
    useState(false);

  let navItems = ["Help", "Contact", "About"];
  const handleSelectNavItem = (navItem: number) => {};

  return (
    <>
      <div>
        <NavBarAdmin
          heading={"FaceReco"}
          navItems={navItems}
          onSelectNavItem={handleSelectNavItem}
          onClickNotification={() =>
            setnotificationModelVisibility(!notificationModelVisibility)
          }
          setNotificationMadalVisibility = {notificationModelVisibility}
          onLogOutClick={onLogOut}
        />
      </div>
      {notificationModelVisibility && <NotificationModal onClose={()=>setnotificationModelVisibility(false)}/>}
    </>
  );
};

export default Admin;
