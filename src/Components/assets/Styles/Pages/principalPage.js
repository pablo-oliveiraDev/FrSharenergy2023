import styled from "styled-components";

export const MyTitulo = styled.h2`
display: flex;
justify-content: center;
align-items:center;
margin-top:10px;
@media(max-width:688px){
    font-size:20px;
    flex-direction:column;
    :first-child{
      margin-bottom:25px;
    }
  }
  @media(max-width:414px){
    input{
      width:20ch;
      margin-right:80px;
    }
  
  }
`;

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

  
  h2 .pesquisar {
    margin-left: 50px;
    margin-top:20px;
  }
  .inputPesquisar {
    margin-left: 5px;
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
  
  @media(max-width:414px){
    h2 {
      margin-left:0;
    }
    .pesquisar {
    margin-left: -200px;
  }
  .inputPesquisar {
    margin-left: 5px;
    width:35ch;
  }    
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
  padding:0; 
  height: 130px ;
  .contLabel {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  label {
    margin-top: 10px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 2ch;   
    margin-left:-250;
  }
  
  .input {
    text-align: center;
    width: 35ch;
    font-weight: 600;
    height: 30px;
    background: #fff;
    margin-left: 2ch;
  }
  @media(max-width:1024px){
    .contLabel{    
      margin-bottom:-30px;
      flex-direction:row;
      margin-left:-250;
      align-items:flex-start;
    }
    img{
      margin-top:50px;
    }
    
  }
  @media(max-width:688px){
    flex-direction: column;
    height:500px;
    justify-content:center;
   label {
    margin-bottom:15px;
   }
    .contLabel{  
      justify-content:space-around;
      margin-top:-350px;
      flex-direction:column;
     
    }
    img{
      margin-top:-400px;
      
    }
    
  }
   @media(max-width:414px){
    img {
      margin-right:70px;
    }
    
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
  height: 170px;
  flex-wrap: wrap;
  

  img {
    margin: 20px;
    margin-top: 30px;
    margin-left:110px;
    height: 100px;
    border-radius: 45px;
    border: 2px solid #000;
    position: absolute;
  }
  @media(max-width:1024px){
   
   img {
    margin-left:59px;
    align-items:center;
    width:100px;
    height:100px;
    position: absolute;
    
     }
  }

  @media(max-width:688px){
    height:70%;
    width:50%;
    margin:0;
    img{
      margin-top:-100px;
      width:50px;
      height:50px;
     
    }
  }
  @media(max-width:414px){
    height:70%;
    width:50%;
    margin:0;
    img{
      margin-top:-70px;
      width:50px;
      height:50px;
     
    }
  }
   @media(max-width:360px){
    img{
      margin-top:-54px;
    }
    
   }
`;
export const MyScrool = styled.div`

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

export const labelContainer = styled.div``;
