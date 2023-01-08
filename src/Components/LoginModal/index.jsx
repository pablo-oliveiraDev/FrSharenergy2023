import * as React from "react";
import { useState, useContext } from "react";
import * as IconsFc from "react-icons/fc";
import * as S from "../assets/Styles/Components/loginModal";
import { AuthContext } from "../../context/Auth";
import { toast } from "react-toastify";
import CadastroModal from "../CadastroModal";



export default function LoginModal({ showCadastro, tituloButton }) {
  const [show, setShow] = useState(true);
  const [user_name, setUser_name] = useState("");
  const [senha, setsenha] = useState("");
  const [active, setActive] = useState(false);
  const { login, signed,setRemember,remember } = useContext(AuthContext);
 

  const handleShow = () => {
    setShow(true);
    setActive(true);
  };

  const handleClose = () => {
    setShow(false);
    setUser_name("");
    setsenha("");
    setActive(false);
  };
  const clickToLogin = (e) => {
    e.preventDefault();

    if (!!signed) {
      toast.info(
        "Usuário ja logado!Por favor click em logout antes de fazer o login novamente!"
      );
      return;
    }
    if (user_name !== "" && senha !== "") {
      login(user_name, senha);
      handleClose();
    } else {
      toast.error("Os campos não podem estar vazios para efetuar o login!😣");
      return;
    }
  };

  return (
    <>
      <S.ShowButton onClick={handleShow} active={active}>
        {tituloButton}
      </S.ShowButton>

      <S.MyModal show={show}>
        <S.MyModal.Header className="Header">
          <S.MyModal.Title className="Title">
            <IconsFc.FcReadingEbook size={28} /> LOGIN
          </S.MyModal.Title>
        </S.MyModal.Header>
        <S.MyModal.Body className="Body">
          <div className="containerInput">
            <div className="containerSub">
              <h3 className="SubTitle">SHARENERGY 2023❤</h3>
            </div>

            <label>
              USERNAME:
              <input
                type="text"
                name="user_name"
                placeholder="Digite seu user-name"
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
              />
            </label>
            <label>
              SENHA:
              <input
                type="password"
                name="senha"
                placeholder="Digite aqui sua senha"
                value={senha.toString()}
                onChange={(e) => setsenha(e.target.value)}
              />
            </label>
            <label className='remenber' border="none">
              Remenber:
              <input type="checkbox" checked={remember} onClick={(e) => setRemember(!remember)} />
            </label>
          </div>
        </S.MyModal.Body>
        <S.MyModal.Footer className="Footer">
          <CadastroModal onClick={handleClose} tituloButton={'Ainda nao tem cadastro?'} />
          <S.MyButton
            className="btn-save"
            variant="primary"
            onClick={clickToLogin}
          >
            ENTRAR
          </S.MyButton>
        </S.MyModal.Footer>
      </S.MyModal>
    </>
  );
}
