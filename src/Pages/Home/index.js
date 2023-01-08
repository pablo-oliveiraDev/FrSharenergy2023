import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import * as S from "../../Components/assets/Styles/Pages/home"
import LoginModal from "../../Components/LoginModal";

export default function Home() {
  const { signed } = useContext(AuthContext);
  if (signed) {
    return <Navigate to="/principal" />;
  }
  return (
    <S.MyContainer>
      <LoginModal />
    </S.MyContainer>
  );
}
