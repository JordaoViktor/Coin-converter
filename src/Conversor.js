import React, { useState } from 'react';


export default function Conversor({moedaA, moedaB}) {
    let [ moedaValor_A, setMoedaValor_A] = useState(0);
    const getApi = async (num) =>{
      let de_para = `${moedaA}-${moedaB}`;
      const url = `https://economia.awesomeapi.com.br/all/${de_para}`;
      
      const response = await fetch(url);
      const data = await response.json();
      const result = data[moedaA].high * num; 
      return setMoedaValor_A(result);
    };

    return (
      <div className="container">
        <h1 className="title">Conversor de Moedas</h1>
        <h3 className="sub-title">{moedaA} para {moedaB}</h3>
        <input className="coin-input" type="number" onChange={(num)=>getApi(num.target.value)}/>
        <p className="coin-value">{moedaValor_A.toLocaleString('pt-BR',{style:'currency', currency:`${moedaB}`})}</p>
  
      </div>
      

    )
}
