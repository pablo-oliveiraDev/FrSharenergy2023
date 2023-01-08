import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../Components/Layout";
import * as S from "../../Components/assets/Styles/Pages/principalPage";
import api from "../../Components/services/api";
import { toast } from "react-toastify";

export default function PrinciapalPage() {
  const [items, setItems] = useState([]);
  const [qntd, setQntd] = useState(4);
  useEffect(() => {
    async function loadRandom() {
      await api
        .get(`/randomUser/?results=${qntd}`)
        .then((res) => {
          setItems(res.data);
        })
        .catch((error) => {
          toast.error(error);
        });
    }
    loadRandom();
  }, [qntd]);

  return (
    <Layout>
      <S.MyContainer>
        {items.map((item, index) => {
          return (
            <S.MyItems key={index}>
              <S.Foto className="foto -container">
                <img src={item.foto} alt="img random user api" />
              </S.Foto>
              <div >
                <label>
                  Nome :<input className="input" type="text" value={item.name} disabled />
                </label>
                <label>
                  User_name :
                  <input className="input" type="text" value={item.username} disabled />
                </label>
                <br />
              </div>
              <div>
                <label>
                  Email :<input className="input" type="text" value={item.email} disabled />
                </label>
                <label>
                  Idade :<input className="input" type="text" value={item.idade} disabled />
                </label>
              </div>
            </S.MyItems>
          );
        })}
      </S.MyContainer>
    </Layout>
  );
}
