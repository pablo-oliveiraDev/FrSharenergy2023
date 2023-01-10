import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Layout from "../../Components/Layout";
import * as S from "../../Components/assets/Styles/Pages/principalPage";
import api from "../../Components/services/api";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/Auth";

export default function PrinciapalPage() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState([]);
  const [qntd, setQntd] = useState(120);
  const [qntdPerPage, setQntdPerPage] = useState(4);
  const [textFilter, setTextFilter] = useState("");
  const [notScroll, SetNotScroll] = useState(0);
  const { itemsPerPage, currentPage, setItemsPerPage, setPages, setCurrentPage } =
    useContext(AuthContext);
  let spages = Math.ceil(items.length / itemsPerPage);
  let FPages = Math.ceil(filter.length / itemsPerPage);
  setPages(textFilter === '' ? spages : FPages);
  const startIndex = (currentPage * itemsPerPage);
  const endIndex = (startIndex + itemsPerPage);
  let sCurrent = items.slice(startIndex, endIndex);
  let fCurrent = filter.slice(startIndex, endIndex);
  const currentItems = textFilter === '' ? sCurrent : fCurrent;

  setItemsPerPage(Number(qntdPerPage));
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

  useEffect(() => {
    function loadFilters() {
      setCurrentPage(0)
      setFilter(
        items.filter(
          (u) =>
            u.name.toLowerCase().includes(textFilter.toLowerCase()) ||
            u.email.toLowerCase().includes(textFilter.toLowerCase()) ||
            u.username.toLowerCase().includes(textFilter.toLowerCase())
        )
      );
    }
    loadFilters();
  }, [textFilter, items]);

  return (
    <Layout>
      <h2>
        RANDOM LIST
        <label className="pesquisar">
          PESQUISAR :
          <input
            className="inputPesquisar"
            type="text"
            value={textFilter}
            onChange={(e) => setTextFilter(e.target.value)}
            placeholder="Nome - email - Username"
          />
        </label>
      </h2>

      <S.MyContainer
        onMouseOver={() => SetNotScroll(1)}
        onMouseLeave={() => SetNotScroll(0)}
      >
        <S.MyScrool setScroll={notScroll} >
          <label className="labelTopo">
            Users/Page:
            <select
              className="input-pesquisar"
              onChange={(e) => setQntdPerPage(e.target.value)}
              placeholder=""
            >
              <option value={1} >
                1
              </option>
              <option value={2}>
                2
              </option>
              <option value={3} >
                3
              </option>
              <option
                value={4}
                defaultValue={4}
              >
                4
              </option>
            </select>
          </label>

          {
            currentItems.map((item, index) => {
              return (
                <>
                  <S.MyItems key={index}>
                    <S.Foto >
                      <img src={item.foto} alt="img random user api" />
                    </S.Foto>
                    <div className="contLabel">
                      <label>
                        Nome :
                        <input
                          className="input"
                          type="text"
                          value={item.name}
                          disabled
                        />
                      </label>
                      <label>
                        User_name :
                        <input
                          className="input"
                          type="text"
                          value={item.username}
                          disabled
                        />
                      </label>
                      <br />

                      <label>
                        Email :
                        <input
                          className="input"
                          type="text"
                          value={item.email}
                          disabled
                        />
                      </label>
                      <label>
                        Idade :
                        <input
                          className="input"
                          type="text"
                          value={item.idade}
                          disabled
                        />
                      </label>
                    </div>
                  </S.MyItems>
                </>
              );
            })}
          <span>
            <label>Page :</label>
            {currentPage + 1}
          </span>
        </S.MyScrool>
      </S.MyContainer>
    </Layout>
  );
}