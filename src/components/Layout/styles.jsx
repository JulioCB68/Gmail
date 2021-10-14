import styled from 'styled-components';

// TB - Top Bar
// AS - Aside
// MB - Main Bar
// SL - Subject Line
// FW - From When
// EB - Email Body
// SP - Side Panel

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    'TB TB TB TB'
    'AS EB EB SP'
    'AS EB EB SP';
  height: 100vh;
`;