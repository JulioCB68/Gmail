import React from "react";

import {
  Container,
  Actions,
  ArrowBack,
  Archive,
  Separator,
  ReportIcon,
  Trash,
  EmailUnread,
  Time,
  AddTaskIcon,
  DriveFile,
  Task,
  DotsVertical,
  Pages,
  Text,
  ArrowRight,
  ArrowLeft,
} from "./styles";

function MainBar() {
  return (
    <Container>
      <Actions>
        <ArrowBack />
        <Archive />
        <ReportIcon />
        <Trash />
        <Separator />
        <EmailUnread />
        <Time />
        <AddTaskIcon />
        <Separator />
        <DriveFile />
        <Task />
        <DotsVertical />
      </Actions>
      <Pages>
        <Text> 1 of 16 </Text>
        <ArrowLeft />
        <ArrowRight />
      </Pages>
    </Container>
  );
}

export default MainBar;
