import styled from "styled-components";

export const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height:100%;
  margin: 0;
    .labelTopo{
      margin-bottom:-15px;
      margin-top:35px;
    }

  h2 {
    
  }
  h2 .pesquisar {
    margin-left: 50px;
  }
  .input-pesquisar {
    margin-left: 5px;
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
`;
export const MyItems = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  border: 2px solid #000;
  background-color: rgba(4, 4, 4, 0.1);
  margin-top: 10px;
  height: 130px !important;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  div label {
    margin-top: 10px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 2ch;
  }
  .input {
    text-align: center;
    width: 38ch;
    font-weight: 600;
    height: 30px;
    background: #fff;
    margin-left: 2ch;
  }
`;
export const Foto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  float: left;
  margin-left: 0;
  margin-right: 4ch;
  width: 200px;
  height: 150px;
  flex-wrap: wrap;

  img {
    margin: 20px;
    margin-bottom: 50px;
    height: 70%;
    border-radius: 45px;
    border: 2px solid #000;
  }
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

export const labelContainer = styled.div``;
