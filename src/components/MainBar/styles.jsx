import styled from "styled-components";

import { ArrowBackOutline } from "styled-icons/evaicons-outline";
import { DotsVerticalRounded } from "styled-icons/boxicons-regular";
import { ArchiveIn, TrashAlt, TimeFive } from "styled-icons/boxicons-solid";
import {
  Report,
  MarkAsUnread,
  AddTask,
  DriveFileMove,
  Label,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from "styled-icons/material-rounded";

export const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  grid-area: MB;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #edeff1;
`;

export const ArrowBack = styled(ArrowBackOutline)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1.5rem 0 0;
`;

export const Archive = styled(ArchiveIn)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1.5rem 0 0;
`;

export const ReportIcon = styled(Report)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1.5rem 0 0;
`;

export const Trash = styled(TrashAlt)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
`;

export const Separator = styled.div`
  width: 2px;
  height: 20px;
  background: #edeff1;
  margin: 0 1.5rem;
`;

export const EmailUnread = styled(MarkAsUnread)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1.5rem 0 0;
`;

export const Time = styled(TimeFive)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1.5rem 0 0;
`;

export const AddTaskIcon = styled(AddTask)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
`;

export const DriveFile = styled(DriveFileMove)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1.5rem 0 0;
`;

export const Task = styled(Label)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1.5rem 0 0;
`;

export const DotsVertical = styled(DotsVerticalRounded)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1.5rem 0 0;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-space-between;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #818488;
`;

export const ArrowLeft = styled(KeyboardArrowLeft)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1rem 0 1rem;
`;

export const ArrowRight = styled(KeyboardArrowRight)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 0 0 1rem;
`;
