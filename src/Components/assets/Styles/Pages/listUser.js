import styled from "styled-components";
import Table from 'react-bootstrap/Table';

export const MyContainer = styled.div`
 display: flex;
 justify-content:center;
 align-items: center;
 flex-direction: column;
 margin:0;
 width: 100%;
 height: 800px;
`;
export const MyTable = styled(Table)`

`;
export const MyScrool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  
  scroll-behavior: auto;
  margin-top: 10px;
  overflow: ${(props) => (props.setScroll === 1 ? 0 : "hidden")};
`;