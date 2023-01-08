import React, { useContext } from "react";
import Layout from "../../Components/Layout";
import * as S from "../../Components/assets/Styles/Pages/services";
import { AuthContext } from "../../context/Auth";

export default function Services() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <S.Container>
        <S.Itens>
          <h1>Serviços</h1>
        </S.Itens>
        <S.Itens></S.Itens>
      </S.Container>
    </Layout>
  );
}
