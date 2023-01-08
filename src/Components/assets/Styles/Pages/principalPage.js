import styled from "styled-components";

export const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 0;
`;
export const MyItems = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border: 2px solid #000;
  background-color: rgba(4, 4, 4, 0.1);
  margin: 10px;

  div label {
    margin-top: 30px;
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
    margin-right: 2ch;
  }
`;
export const Foto = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  float: left;
  margin-left: 0;
  margin-right: 4ch;
  width: 200px;
  height: 150px;
  flex-wrap: wrap;

  img {
    margin: 10px;
    size: 100%;
    border-radius: 45px;
    border: 2px solid #000;
    position: realtive;
  }
`;
export const labelContainer = styled.div``;
