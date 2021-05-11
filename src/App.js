import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';


const Title = styled.h1`
  color: #8B4513;
  text-align: center;
  text-shadow: 2px 1px 1px #A0522D;
`;

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`;

const Container = styled.div`
  background-color: #F5DEB3;
  width: 420px;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #D2B48C;
  box-shadow: 2px 2px 8px #363636;
  margin-top: 80px
`;

const Resultado = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #2F4F4F;
  color: #1C1C1C;
`;

function App() {

  const [ valorConta, setValorConta ] = useState('');
  const [ valorGorjeta, setValorGorjeta ] = useState('');
  
    
  return (
    <>
    <Container>
      <Title>Calculadora de Gorjeta</Title>
      <p>Quanto deu a conta?</p>
      <Input placeholder="0" type="number" value={valorConta} onChange={(e)=>setValorConta(parseFloat(e.target.value))} />
      <p>Qual a porcentagem da gorjeta?</p>
      <Input placeholder="0" type="number" value={valorGorjeta} onChange={(e)=>setValorGorjeta(parseFloat(e.target.value))} /> 
      

      { (valorConta, valorGorjeta) > 0 &&
      <Resultado>
        Subtotal: R$ {valorConta.toFixed(2)}<br/>
        <br/>
        Gorjeta ({valorGorjeta}%): R$ {((valorGorjeta/100).toFixed(2) * (valorConta)).toFixed(2)}<br/>
        <h4>Total: R$ {((valorConta)+ ((valorGorjeta/100)* valorConta)).toFixed(2)}</h4>
      </Resultado>
     }
     </Container>
    </>
  ); 
}

export default App;