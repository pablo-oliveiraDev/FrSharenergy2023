import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import * as S from '../../Components/assets/Styles/Pages/listUser';
import CadList from '../../Components/CadList';
import EditList from '../../Components/EditList';
import api from '../../Components/services/api';


export default function ListUser() {
  const [results, setResults] = useState([]);
  const [notScroll, SetNotScroll] = useState(0);
 
  useEffect(() => {
    async function loadListUser() {
      await api.get('/listUser')
        .then((res) => {
          setResults(res.data);
        })
    }
    loadListUser();
  }, [results])

  return (
    <Layout>
      <S.MyContainer>
        <CadList variant='primary' tituloButton={'NOVO REGISTRO'} />
        <S.MyScrool setScroll={notScroll}>

          <S.MyTable responsive striped bordered hover variant="dark" onMouseOver={() => SetNotScroll(1)}
            onMouseLeave={() => SetNotScroll(0)}>
            <thead >
              <tr>
                <th></th>
                <th>Nome</th>
                <th>email</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Cep</th>
                <th>Cidade</th>
                <th>Rua</th>
                <th>Numero</th>
                <th>Complemento</th>
                <th>Editar?</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.nome}</td>
                      <td>{item.email}</td>
                      <td>{item.cpf}</td>
                      <td>{item.telefone}</td>
                      <td>{item.cep}</td>
                      <td>{item.cidade}</td>
                      <td>{item.rua}</td>
                      <td>{item.numero}</td>
                      <td>{item.complemento}</td>
                      <td><EditList tituloButton={'edit'} 
                      userlist={item}                 
                      /></td>
                    </tr>
                    <tr></tr>
                  </>
                )
              })}
            </tbody>

          </S.MyTable>

        </S.MyScrool>
      </S.MyContainer>

    </Layout >

  );
}