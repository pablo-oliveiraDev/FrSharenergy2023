import * as React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/editList';
import IMaskInput from 'react-input-mask';
import api from '../services/api';



export default function EditList({ tituloButton, userlist,setUpList,upList }) {
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [rua, setRua] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [listId, setListId] = useState('');
   



    function takeDados() {
        handleShow();
        setListId(userlist._id);
        setNome(userlist.nome);
        setEmail(userlist.email);
        setCPF(userlist.cpf);
        setTelefone(userlist.telefone);
        setCep(userlist.cep);
        setCidade(userlist.cidade);
        setRua(userlist.rua);
        setNumero(userlist.numero);
        setComplemento(userlist.complemento);
    }
    async function deleteClick(listId){
        await api.delete(`/listUser/${listId}`)
        .then((res)=>{
            toast.success(res.data.message);
            handleClose();
        })
        .catch((err)=>{
            toast.error('Erro ao deletar !'+err.statusCode);
        });
    }
    async function updateClick(listId,
        nome,
        email,
        cpf,
        telefone,
        cep,
        cidade,
        rua,
        numero,
        complemento
    ){
        await api.patch(`/listUser/${listId}`,{
            nome,
            email,
            cpf,
            telefone,
            cep,
            cidade,
            rua,
            numero,
            complemento
        })
        .then((res)=>{
            toast.success(res.data.message);
            handleClose();
            
        })
        .catch((err)=>{
            toast.error('Erro ao atualizar!'+err.statusCode);
        });
    }


    const handleClose = () => {        
        setShow(false);
        setListId('')
        setNome('');
        setEmail('');
        setCPF('');
        setTelefone('');
        setCep('');
        setCidade('');
        setRua('');
        setNumero('');
        setComplemento('')

    };
 
    
    const handleShow = () => {
        setShow(true);

    };



    return (
        <>
            <S.ShowButton width='40px' onClick={()=>takeDados()} >
                {tituloButton}
            </S.ShowButton>

            <S.MyModal show={show} onHide={handleClose}>
                <S.MyModal.Header className='Header'>
                    <S.MyModal.Title className='Title'><IconsFc.FcReadingEbook size={28} /> NOVO CADASTRO</S.MyModal.Title>
                </S.MyModal.Header>
                <S.MyModal.Body className='Body'>

                    <div className='containerInput'>

                        <div className='containerSub'>
                            <h3 className='SubTitle'>DADOS PESSOAIS</h3>
                        </div>
                        <label>NOME:
                            <input
                                type='text'
                                name='nome'
                                placeholder='Digite seu nome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </label>

                        <label>TELEFONE:
                            <IMaskInput
                                type='text'
                                name='telefone'
                                mask='(99)99999-9999'
                                placeholder='Digite seu telefone'
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ''))}
                            />

                        </label>

                        <label>CPF:
                            <IMaskInput
                                type='text'
                                name='cpf'
                                mask='999.999.999-99'
                                placeholder='Digite o seu cpf'
                                value={cpf}
                                onChange={(e) => setCPF(e.target.value.replace(/\D/g, ''))}
                            />
                        </label>
                        <label>EMAIL:
                            <input
                                type='text'
                                name='email'
                                placeholder='Digite seu melhor email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <div className='containerSub'>
                            <h3 className='SubTitle'>ENDEREÇO</h3>
                        </div>
                        <label>CEP:
                            <IMaskInput
                                type='text'
                                name='cep'
                                mask='99999-999'
                                placeholder='Digite o seu cep'
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                        </label>
                        <label>RUA:
                            <input
                                type='text'
                                name='rua'
                                placeholder='Digite o nome da rua'
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                        </label>
                        <label>CIDADE:
                            <input
                                type='text'
                                name='cidade'
                                placeholder='Digite o nome da sua cidade'
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                        </label>
                        <label>COMPLEMENTO:
                            <input
                                type='text'
                                name='complemento'
                                placeholder='Digite o nome da sua cidade'
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}
                            />
                        </label>
                        <label>NUMERO:
                            <input
                                type='text'
                                name='numero'
                                placeholder='Numero da sua casa'
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                            />
                        </label>
                    </div>

                </S.MyModal.Body>
                <S.MyModal.Footer className='Footer'>
                    <S.MyButton className='btn-fechar' variant="success" onClick={() => updateClick(listId,
                        nome,
                        email,
                        cpf,
                        telefone,
                        cep,
                        cidade,
                        rua,
                        numero,
                        complemento)}>
                        Edit
                    </S.MyButton>
                    <S.MyButton className='btn-save' variant="danger" onClick={()=>deleteClick(listId)}>
                        DEL
                    </S.MyButton>
                    <S.MyButton className='btn-fechar' variant="secondary" onClick={handleClose}>
                        Fechar
                    </S.MyButton>
                </S.MyModal.Footer>
            </S.MyModal>
        </>

    );
}