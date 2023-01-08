import * as React from "react";
import { useState, useContext } from "react";
import * as IconsFc from "react-icons/fc";
import * as S from "../assets/Styles/Components/cadastroModal";
import IMaskInput from "react-input-mask";
import { AuthContext } from "../../context/Auth";

export default function CadastroModal({ tituloButton }) {
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState("");
  const [user_name, setUser_name] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setsenha] = useState("");

  const { cadastro } = useContext(AuthContext);

  const handleClose = () => {
    setShow(false);
  };
  const clickToSave = (e) => {
    e.preventDefault();
    if (
      nome !== "" &&
      user_name !== "" &&
      cpf !== "" &&
      email !== "" &&
      telefone !== "" &&
      senha !== ""
    ) {
      cadastro(nome, user_name, email, senha, cpf, telefone);
      handleClose();
    } else {
      alert("Os Campos nao podem estar vazios!🙁");
      return;
    }
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <S.ShowButton onClick={handleShow}>{tituloButton}</S.ShowButton>

      <S.MyModal show={show} onHide={handleClose}>
        <S.MyModal.Header className="Header">
          <S.MyModal.Title className="Title">
            <IconsFc.FcReadingEbook size={28} /> NOVO CADASTRO
          </S.MyModal.Title>
        </S.MyModal.Header>
        <S.MyModal.Body className="Body">
          <div className="containerInput">
            <div className="containerSub">
              <h3 className="SubTitle">DADOS PESSOAIS</h3>
            </div>
            <label>
              NOME:
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
            <label>
              USERNAME:
              <input
                type="text"
                name="sobrenome"
                placeholder="Digite seu sobrenome"
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
              />
            </label>
            <label>
              TELEFONE:
              <IMaskInput
                type="text"
                name="telefone"
                mask="(99)99999-9999"
                placeholder="Digite seu telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ""))}
              />
            </label>
            <label>
              CPF:
              <IMaskInput
                type="text"
                name="cpf"
                mask="999.999.999-99"
                placeholder="Digite o seu cpf"
                value={cpf}
                onChange={(e) => setCPF(e.target.value.replace(/\D/g, ""))}
              />
            </label>
            <label>
              EMAIL:
              <input
                type="text"
                name="email"
                placeholder="Digite seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              SENHA:
              <input
                type="password"
                name="senha"
                placeholder="Digite aqui sua senha"
                value={senha}
                onChange={(e) => setsenha(e.target.value)}
              />
            </label>
          </div>
        </S.MyModal.Body>
        <S.MyModal.Footer className="Footer">
          <S.MyButton
            className="btn-fechar"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </S.MyButton>
          <S.MyButton
            className="btn-save"
            variant="primary"
            onClick={clickToSave}
          >
            Save Changes
          </S.MyButton>
        </S.MyModal.Footer>
      </S.MyModal>
    </>
  );
}
