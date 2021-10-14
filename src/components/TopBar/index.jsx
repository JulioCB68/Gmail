import React from "react";

import GmailIcon from "../../assets/icons/GmailIcon.svg";
import GsuiteLogin from "../../assets/icons/GSuiteLogin.svg";

import {
  Container,
  MenuLogo,
  MenuBars,
  GmailImg,
  MenuText,
  SearchBar,
  Plus,
  InputSearch,
  DropDown,
  UserControls,
  Help,
  Setting,
  Options,
  Gsuite,
} from "./styles";

function TopBar() {
  return (
    <Container>
      <MenuLogo>
        <MenuBars />
        <GmailImg src={GmailIcon} alt="Gmail Icon" />
        <MenuText> Gmail </MenuText>
      </MenuLogo>
      <SearchBar>
        <Plus />
        <InputSearch placeholder="Search mail"/>
        <DropDown />
      </SearchBar>
      <UserControls>
        <Help />
        <Setting />
        <Options />
        <Gsuite src={GsuiteLogin} alt="G Suite" />
      </UserControls>
    </Container>
  );
}

export default TopBar;
