import * as React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/cadList';
import IMaskInput from 'react-input-mask';
import api from '../services/api';



export default function CadList({ tituloButton }) {
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
    const [uf, setUf] = useState('');
    const [mostrarEndereco, setMostarEndereco] = useState('');
    const [msgError, setMsgError] = useState('');





    async function cadastro(nome,
        email,
        cpf,
        telefone,
        cep,
        cidade,
        rua,
        numero,
        complemento) {
        let response = '';
        await api.post('/listUser', {
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
            .then((res) => {
                response = res.data;
                toast.success(res.data.message);

            });
        console.log(response);
        if (response.data.statusCode === 500) {
            toast.error(response.data.message);
        }
    }


    const handleClose = () => {
        setMostarEndereco('');
        setShow(false);
        setNome('');
        setEmail('');
        setCPF('');
        setTelefone('');
        setCep('');
        setCidade('');
        setRua('');
        setNumero('');
        setComplemento('');
        setMsgError('');

    };
    const clickToSave = (e) => {
        e.preventDefault();
        if (nome !== '' &&
            cpf !== '' &&
            email !== '' &&
            telefone !== '' &&
            cep !== '' &&
            rua !== '' &&
            cidade !== ''
        ) {
            cadastro(
                nome,
                email,
                cpf,
                telefone,
                cep,
                cidade,
                rua,
                numero,
                complemento
            )
            handleClose();
        } else {
            alert('Os Campos nao podem estar vazios!🙁');
            return;
        }

    }
    const handleChange = (valueCep) => {
        setCep(valueCep);
        setRua('');
        setCidade('');
        setMsgError('');
    };
    const handleShow = () => {
        setShow(true);

    };

    const loadCep = () => {
        if (cep.length >= 9) {
            fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json`)
                .then(res => res.json())
                .then((data) => {
                    if (data.erro !== true) {
                        setMostarEndereco(true);
                        console.log(data);
                        setRua(data.logradouro);
                        setCidade(data.localidade);
                        setUf(data.uf);

                    } else {
                        setRua('');
                        setCidade('');
                        setMostarEndereco(false);
                        setMsgError('E necessario digitar um cep valido!');
                        return;
                    }

                });

        } else {
            setMsgError('O cep precisa ter 9 digitos');
            setMostarEndereco(false);
            return;
        };

    }

    return (
        <>
            <S.ShowButton onClick={handleShow} >
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
                                onChange={(e) => setNome(nome)}
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
                                onChange={(e) => handleChange(e.target.value)}
                            /><button onClick={loadCep}><IconsFc.FcSearch size={25} /></button>
                        </label>
                        {mostrarEndereco ? (<> <label>RUA:
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
                                    value={cidade + '-' + uf}
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
                            </label></>) : (<div className='containerSub'>
                                <h3 className='SubTitle'>{msgError}</h3>
                            </div>)}
                    </div>

                </S.MyModal.Body>
                <S.MyModal.Footer className='Footer'>
                    <S.MyButton className='btn-fechar' variant="secondary" onClick={handleClose}>
                        Close
                    </S.MyButton>
                    <S.MyButton className='btn-save' variant="primary" onClick={clickToSave}>
                        Save Changes
                    </S.MyButton>
                </S.MyModal.Footer>
            </S.MyModal>
        </>

    );
}