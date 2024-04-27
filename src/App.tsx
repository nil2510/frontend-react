import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import LoginContainer from "./components/LoginContainer";
import axios from "axios";
import Employee from "./components/Employee";
import Admin from "./components/Admin";
import Help from "./components/Help";
import Contact from "./components/Contact";
import About from "./components/About";

// import {
//   GoogleOAuthProvider,
//   GoogleLogin,
//   CredentialResponse,
//   useGoogleLogin,
// } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

interface Credential {
  email: string;
  password: string;
}

function App() {
  const [HelpVisible, setHelpVisible] = useState(false);
  const [ContactVisible, setContactVisible] = useState(false);
  const [AboutVisible, setAboutVisible] = useState(false);

  const [LoggedIn, setLoggedIn] = useState(false);
  const [UserType, setUserType] = useState<string | null>("");


  let navItems = ["Help", "Contact", "About"];
  const handleSelectNavItem = (navItem: number) => {
    if (navItem == 0) {
      setHelpVisible(true);
      setContactVisible(false);
      setAboutVisible(false);
    }
    if (navItem == 1) {
      setHelpVisible(false);
      setContactVisible(true);
      setAboutVisible(false);
    }
    if (navItem == 2) {
      setHelpVisible(false);
      setContactVisible(false);
      setAboutVisible(true);
    }
  };

  const handleLogin = (data: Credential) => {
    axios.post("http://localhost:5000/login", data).then((res) => {
      localStorage.setItem("api_key", res.data.api_key);
      localStorage.setItem("user_type", res.data.user_type);
      setLoggedIn(true);
      setUserType(res.data.user_type);
    });
  };
  const handleSSO = () => {};
  const handleLogout = () => {
    localStorage.setItem("api_key", "");
    localStorage.setItem("user_type", "");
    setLoggedIn(false);
    setUserType("");
  };
  useEffect(() => {
    const API_KEY = localStorage.getItem("api_key");
    const USER_TYPE = localStorage.getItem("user_type");

    if (API_KEY == null || API_KEY === "") {
      setUserType("");
    } else if (USER_TYPE != "") {
      setLoggedIn(true);
      setUserType(USER_TYPE);
    }
  }, []);
  return (
    <>
      {!LoggedIn && (
        <div>
          <NavBar
            heading="FaceReco"
            navItems={navItems}
            onSelectNavItem={handleSelectNavItem}
          />
          {HelpVisible && <Help onCloseHelp={() => setHelpVisible(false)} />}
          {ContactVisible && (
            <Contact onCloseContact={() => setContactVisible(false)} />
          )}
          {AboutVisible && (
            <About onCloseAbout={() => setAboutVisible(false)} />
          )}
          <LoginContainer onSubmit={handleLogin} ssoLogin={handleSSO} />
        </div>
      )}

      {UserType == "admin" ? <Admin onLogOut={handleLogout}/> : null}
      {UserType == "emp" ? <Employee onLogOut={handleLogout}/> : null}
    </>
  );
}

export default App;
