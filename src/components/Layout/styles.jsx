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
  grid-template-columns: .37fr 1fr 1fr 0.10fr;
  grid-template-rows: 0.05fr 0.05fr 1fr;
  grid-template-areas:
    'TB TB TB TB'
    'AS MB MB SP'
    'AS EB EB SP';
  height: 100vh;
`;