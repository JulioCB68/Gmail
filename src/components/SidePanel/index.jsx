import React from "react";

import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import KeepIcon from "../../assets/icons/KeepIcon.svg";

import {
  Container,
  SubContainer,
  ImageCalendar,
  ImageKeep,
  Separator,
  AddIcon,
  ArrowLeft,
} from "./styles";

function SidePanel() {
  return (
    <Container>
      <SubContainer>
        <ImageCalendar src={CalendarIcon} alt="G Suite" />
        <ImageKeep src={KeepIcon} alt="G Suite" />
        <Separator />
        <AddIcon />
      </SubContainer>
      <ArrowLeft />
    </Container>
  );
}

export default SidePanel;
