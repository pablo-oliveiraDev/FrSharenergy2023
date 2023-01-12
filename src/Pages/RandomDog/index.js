import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import api from '../../Components/services/api';
import * as S from '../../Components/assets/Styles/Pages/dogs';
import errou from '../../Components/assets/img/imgHome/errou.gif'




export default function RandomDog() {
  const [numStatus, setNumStatus] = useState(false);
  const [result, setResult] = useState('');
  

  useEffect(() => {
    async function getStatusCode() {
      await api.get(`/dog`)
        .then((res) => {
          setResult(res.data)
        })
    }
    getStatusCode()
  }, [numStatus]);
 
  return (
    <Layout>
      <S.MyContainer>
        <div className='imagem' id='imagem' >
          <img src={result.split('.').pop()=== 'jpg' ? result : errou} alt="dogs" />
        </div>
        <h3>Randomize um doginho!</h3>
        <label>
          <button onClick={() => setNumStatus(!numStatus)}>Atualizar</button>

        </label>

      </S.MyContainer>

    </Layout >

  );
}