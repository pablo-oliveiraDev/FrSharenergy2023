import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../Components/services/api";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [remember, setRemember] = useState(null);

  useEffect(() => {
    function loadingStorage() {
      const storageUser = localStorage.getItem("loginUser");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadingStorage();
  }, []);
  //login users

  async function login(user_name, senha) {
    let newData = {
      user_name: user_name,
      senha: senha,
    };
    setLoadingAuth(true);
    await api
      .post("/loginUser", newData)
      .then((res) => {
        let dataUser = {
          id: res.data[0].id,
          nome: res.data[0].nome,
          user_name: res.data[0].user_name,
          email: res.data[0].email,
          cpf: res.data[0].cpf,
          telefone: res.data[0].telefone,
          senha: res.data[0].senha,
        };
        if (dataUser) {
          setUser(dataUser);
          storageUser(remember === true ? dataUser : "");
          setLoading(false);
          toast.success("Bem vindo a Ventura Refrigeração!👍");
        } else {
          toast.error("Email ou senha incorretos tente novamente");
          return;
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("Que pena!\nAlgo deu errado!😓");
      });
  }
  console.log(remember);
  async function cadastro(
    nome,
    user_name,
    email,
    senha,
    cpf,
    telefone
  ) {
    await api
      .post(`/userLogRoutes/`, {
        nome: nome,
        user_name,
        email: email,
        cpf: cpf,
        telefone: telefone,
        senha: senha,
        data_cadastro: new Date(),
      })
      .then(() => {
        toast.success("Cadastro ralizado com sucesso!\nSeja bem vindo!😃");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Que pena!\nAlgo deu errado!⚠");
      });
  }

  function storageUser(data) {
    localStorage.setItem("loginUser", JSON.stringify(data));
  }

  async function logOut() {
    localStorage.removeItem("loginUser");
    setUser("");
    toast.info("Logout efetuado com sucesso!🙁");
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading,
        user,
        remember,
        loadingAuth,
        setRemember,
        login,
        cadastro,
        setUser,
        storageUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
