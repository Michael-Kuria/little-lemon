import React from "react";
import Nav from "./Nav";
import "../../App.css";
import { useWidth } from "../../Width";
import MenuIcon from "@mui/icons-material/Menu";
import { useDisclosure } from "@chakra-ui/react";

export default function Header({ toggleDrawer }) {
  const [hideNav] = useWidth();

  return (
    <header>
      <div className="header-logo-section">
        {!hideNav && (
          <div>
            <button onClick={toggleDrawer(true)}>
              <MenuIcon />
            </button>
          </div>
        )}
        <div>
          <img src="/assets/Logo.png" width="" height="" alt="this is a logo" />
        </div>
      </div>

      {hideNav && <Nav />}
    </header>
  );
}
