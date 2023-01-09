import styled from "styled-components";



export const MyMain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 0 0 0;
  padding: 0;
  width: 100%;
  justify-content: space-around;

  .layout-main {
    border: solid 2px #00c1;
    margin: 0;
    padding: 0;
    width: 100%;
    float: left;
    h2 {
      justify-content: space-around;
      margin-left:50px;
      margin-bottom:-10px;
      margin-top:5px;
    }
    h2 .pesquisar {
      margin-left: 50px;
    }
    .input-pesquisar {
      margin-left: 5px;
    }
  }
`;