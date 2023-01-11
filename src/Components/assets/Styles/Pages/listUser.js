import styled from "styled-components";
import Table from 'react-bootstrap/Table';

export const MyContainer = styled.div`
 display: flex;
 justify-content:center;
 align-items: flex-start;
 flex-direction: column;
 margin:50px;
 width: 1080px;
 height: 1000px;

 @media(max-width:688px){
 margin-left:-80px;  
} 
 @media(max-width:414px){
  height:1200px;
  margin-left:-10px;  
} 
`;
export const MyTable = styled(Table)`
text-align:center;
position: right;
width:1580px;
margin-left:10px;
margin-top:20px;
border:2px;
th{
  padding:15px;
    
}
td {
 width:25ch;
  text-align:center;
  padding:10px 40px;
}
tr {
  padding:20px 20px;  
  width:25ch; 
}
@media(max-width:1024px){
  width:900px;
  margin-left:0px;
}
 @media(max-width:688px){
 margin-left:15px;  
} 
 @media(max-width:414px){
  margin-left:10px;  
} 
`;
export const MyScrool = styled.div`
 width: 900px;
  height: 100%;
  overflow-x: scroll;
  position: relative;
  @media(max-width:1024px){
  width:700px; 
} 
 @media(max-width:688px){
  width:500px;   
} 
 @media(max-width:414px){
  width:300px;   
} 
`;
export const MyScroolVT = styled.div`

  width: 100%;
  height: 1000px;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: auto;
  margin-top:-100px;
  margin-left:100px;
  margin-top: 10px;
  overflow: ${(props) => (props.setScroll === 1 ? 0 : "hidden")};
 @media(max-width:1024px){
  margin-top:-570px;
  height:600px;
 }
 @media(max-width:688px){
  margin-top:-350px;
  height:600px;
 }
 @media(max-width:414px){
  margin-left:15px;
  margin-top:-500px;
  }
 @media(max-width:375px){
  margin-top:-700px;
  height:480px;
  }
 @media(max-width:360px){
  margin-top:-850px;
  height:300px;
  }
`;