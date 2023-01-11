import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import api from '../../Components/services/api';
import * as S from '../../Components/assets/Styles/Pages/statusCode';

export default function Dashboard() {
  const [numStatus, setNumStatus] = useState(404);
  const [result, setResult] = useState('');
  const [takeChange, setTakeChange] = useState('');
  useEffect(() => {
    async function getStatusCode() {
      if (numStatus) {
        await api.get(`statusCode/?numImage=${numStatus}`)
          .then((res) => {
            setResult(res.data)
          })
        
      }
    }
    getStatusCode()
  }, [numStatus]);
  function handleChange(e) {
    e.preventDefault();
    setNumStatus('');
    setTakeChange(e.target.value);
    setResult('');

  }
  


  return (
    <Layout>
      <S.MyContainer>
        <div className='imagem' id='imagem'>
        <img src={result.toString()} alt='result' />
        
        </div>
        <h3>Digite um status code !</h3>
        <label>
          <input type='number'
            className='numero'
            value={takeChange}
            onChange={ handleChange } 
            placeholder='Digite 1 a 999'
          /><button onClick={() => setNumStatus(takeChange)}>enviar</button>

        </label>

      </S.MyContainer>

    </Layout >
  );
}