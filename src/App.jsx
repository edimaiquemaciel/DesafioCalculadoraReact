import { useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals } from 'react-icons/fa';
import { FaC } from "react-icons/fa6";


function App() {
  const [primeiroValor, setPrimeiroValor] = useState('');
  const [segundoValor, setSegundoValor] = useState('');
  const [operador, setOperador] = useState('');
  const [resultado, setResultado] = useState(0);
  const [visible, setVisible] = useState("hidden");
  const resultadoInput = document.getElementById("resultado");
  const todosBotoes = document.querySelectorAll("button");

  useEffect(()=>{
    if(primeiroValor !== '' && segundoValor !== ''){
      todosBotoes.forEach(botao => {
        botao.disabled = false;
        botao.classList.add('btn-hover');
        botao.classList.remove('teste');
      });
    }else{
      todosBotoes.forEach((botao, index)=> {
        botao.disabled = true;
        botao.classList.remove('btn-hover');
        botao.classList.add('teste');
        if(index === todosBotoes.length - 1 && (primeiroValor !== '' || segundoValor !== '')){
          botao.disabled = false;
          botao.classList.add('btn-hover');
          botao.classList.remove('teste');
        }
      });
    }
  },[primeiroValor,segundoValor]);


  const soma = () => {
    if(primeiroValor !== '' && segundoValor !== ''){
      setResultado(primeiroValor + segundoValor);
      setOperador(<FaPlus />);
      setVisible("visible");
      resultadoInput.classList.remove("resultado-input-erro");
    }
    };

  const subtracao = () => {
    if(primeiroValor !== '' && segundoValor !== ''){
      setResultado(primeiroValor - segundoValor);
      setOperador(<FaMinus />);
      setVisible("visible");
      resultadoInput.classList.remove("resultado-input-erro");
    }
    };

  const multiplicacao = () => {
    if(primeiroValor !== '' && segundoValor !== ''){
      setResultado(primeiroValor * segundoValor);
      setOperador(<FaTimes />);
      setVisible("visible");
      resultadoInput.classList.remove("resultado-input-erro");
    }
    };

  const divisao = () => {
    if(primeiroValor !== '' && segundoValor !== ''){
        setResultado(primeiroValor / segundoValor);
        setOperador(<FaDivide />);
        setVisible("visible");
        if(segundoValor == 0) {
          setResultado('Não é possível dividir por zero.');
          resultadoInput.classList.add("resultado-input-erro");
        }else{
          resultadoInput.classList.remove("resultado-input-erro");
        }
      }
    };

  const limpar = () =>{
    if(primeiroValor !== '' || segundoValor !== '' || resultado ){
      setResultado(0);
      setPrimeiroValor("");
      setSegundoValor("");
      setOperador("");
      setVisible("hidden");
      if(resultadoInput.classList.contains('resultado-input-erro')){
        resultadoInput.classList.remove("resultado-input-erro");
      }
    }  
  }


  const onChangePrimeiro = (event) => {
    const valor = event.target.value;
      if (valor === 0 || valor === '') {
          setPrimeiroValor('');
      } else {
          setPrimeiroValor(Number(valor));
      }
  }

  const onChangeSegundo = (event) => {
    const valor = event.target.value;
      if (valor === 0 || valor === '') {
          setSegundoValor('');
      } else {
          setSegundoValor(Number(valor));
      }
  }



  return (
    <main>

      <h1>CalculaNaWeb</h1>
      <section className='input-section'>
        <input type="number" placeholder='Digite um número' value={primeiroValor} onChange={onChangePrimeiro}/>

        <div><span style={{visibility: visible}}>{operador}</span></div>

        <input type="number" placeholder='Digite um número' value={segundoValor} onChange={onChangeSegundo}/>
      </section>

      <div><span><FaEquals /></span></div>
      
      <section className='resultado-section'>
        <input id='resultado' type="text" readOnly value={Number(resultado) ? Number.isInteger(resultado) ? Number(resultado): resultado.toFixed(2) : resultado } />
      </section>

      <section className='btn-section'>
        <button className='btn' onClick={soma}><FaPlus /></button>
        <button className='btn' onClick={subtracao}><FaMinus /></button>
        <button className='btn' onClick={multiplicacao}><FaTimes /></button>
        <button className='btn' onClick={divisao}><FaDivide /></button>
        <button className='btn' onClick={limpar}><FaC /></button>
      </section>
      
  </main>
  )
}

export default App
