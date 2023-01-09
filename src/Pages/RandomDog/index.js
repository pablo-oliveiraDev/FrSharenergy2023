import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import api from '../../Components/services/api';

import * as S from '../../Components/assets/Styles/Pages/statusCode';
import { useHref } from 'react-router-dom';



export default function RandomDog() {
  const [numStatus, setNumStatus] = useState(false);
  const [result, setResult] = useState('');
  const [takeChange, setTakeChange] = useState('');

  useEffect(() => {
    async function getStatusCode() {
      await api.get(`https://random.dog/`)
        .then((res) => {
          setResult(res.data)
        })
    }
    getStatusCode()
  }, [numStatus]);
  
  return (    
    <Layout>
      <S.MyContainer>
        <div className='imagem' id='imagem'>

          {result}
        </div>
        <h3>Digite um status code !</h3>
        <label>
          <input type='number'
            className='numero'
            value={''}
            onChange={''}
            placeholder='Digite 1 a 999'
          /><button onClick={() => setNumStatus(!numStatus)}>enviar</button>

        </label>

      </S.MyContainer>

    </Layout >
  
  );
}