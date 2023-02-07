import React from "react";
import Nav from "./Nav";
import "../../App.css";
import { useWidth } from "../../Width";
import MenuIcon from "@mui/icons-material/Menu";
import { useDisclosure } from "@chakra-ui/react";
import SideMenu from "../SideMenu";

export default function Header() {
  const [hideNav] = useWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <SideMenu isOpen={isOpen} onClose={onClose} />
      <div>
        {!hideNav && (
          <div>
            <button onClick={onOpen}>
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
