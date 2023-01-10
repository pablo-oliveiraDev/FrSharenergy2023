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
 margin-left:20px;
  width: 500px;
  height: 400px;
  overflow-x: scroll;
  position: relative;
  scroll-behavior: auto;
  margin-top: 10px;
  
`;