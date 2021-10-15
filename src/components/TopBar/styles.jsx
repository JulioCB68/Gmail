import styled from "styled-components";

import { ThreeBars } from "styled-icons/octicons";
import { Settings2Outline } from "styled-icons/evaicons-outline";
import { HelpCircle } from "styled-icons/boxicons-regular";
import { Grid, DownArrow } from "styled-icons/boxicons-solid";
import { Search } from "styled-icons/bootstrap";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 2rem;
  grid-area: TB;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #edeff1;
`;

export const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuBars = styled(ThreeBars)`
  width: 20px;
  height: 20px;
  color: #757575;
  cursor: pointer;
  margin-right: 1.5rem;
  transition: opacity 0.2s;
`;

export const GmailImg = styled.img`
  cursor: pointer;
  margin: 0 1rem;
`;

export const MenuText = styled.p`
  font-size: 22px;
  line-height: 26px;
  color: #606367;
  margin: 0 4.5rem 0 1rem;
  @media (max-width: 768px) {
    margin: 0 2rem 0 1rem;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  min-width: 10%;
  background: #f5f5f5;
  border-radius: 3px;
`;

export const Plus = styled(Search)`
  width: 16px;
  height: 16px;
  color: #606367;
  cursor: pointer;
  margin: 0 0 0 1rem;
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 1rem;
  background: transparent;
`;

export const DropDown = styled(DownArrow)`
  width: 16px;
  height: 16px;
  color: #606367;
  cursor: pointer;
  margin: 0 1rem 0 0;
`;

export const UserControls = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6.5rem;
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
`;

export const Help = styled(HelpCircle)`
  width: 25px;
  height: 25px;
  color: #757575;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-right: 2rem;
`;

export const Setting = styled(Settings2Outline)`
  width: 25px;
  height: 25px;
  color: #757575;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-right: 2rem;
`;

export const Options = styled(Grid)`
  width: 35px;
  height: 35px;
  color: #757575;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-right: 2rem;
`;

export const Gsuite = styled.img`
  cursor: pointer;
  transition: opacity 0.2s;
`;
