import styled from "styled-components";

import { Add, KeyboardArrowLeft, } from "styled-icons/material-rounded";

export const Container = styled.div`
  width: 100%;
  grid-area: SP;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-left: 1px solid #edeff1;
  padding: 0 0 1rem 0;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageCalendar = styled.img`
  width: 100%;
  cursor: pointer;
  margin: 1rem 0 2rem;
`;

export const ImageKeep = styled.img`
  width: 100%;
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const AddIcon = styled(Add)`
  width: 25px;
  height: 25px;
  color: #757575;
  cursor: pointer;
  margin-top: 2rem;
`;

export const Separator = styled.div`
  width: 20px;
  height: 2px;
  background: #edeff1;
  margin-top: 1rem 2rem;
`;

export const ArrowLeft = styled(KeyboardArrowLeft)`
  width: 20px;
  height: 20px;
  color: #606367;
  cursor: pointer;
  margin: 0 1rem 0 1rem;
`;


