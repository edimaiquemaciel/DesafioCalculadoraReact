import { useState } from 'react';
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals } from 'react-icons/fa';
import { FaC } from "react-icons/fa6";


function App() {
  const [primeiroValor, setPrimeiroValor] = useState('');
  const [segundoValor, setSegundoValor] = useState('');
  const [operador, setOperador] = useState('');
  const [resultado, setResultado] = useState(0);
  const [visible, setVisible] = useState("hidden");

  const soma = () => {
    if(primeiroValor  && segundoValor){
      setResultado(primeiroValor + segundoValor);
      setOperador(<FaPlus />);
      setVisible("visible");
    }
    };

  const subtracao = () => {
    if(primeiroValor  && segundoValor){
      setResultado(primeiroValor - segundoValor);
      setOperador(<FaMinus />);
      setVisible("visible");
    }
    };

  const multiplicacao = () => {
    if(primeiroValor  && segundoValor){
      setResultado(primeiroValor * segundoValor);
      setOperador(<FaTimes />);
      setVisible("visible");
    }
    };

  const divisao = () => {
    if(primeiroValor  && segundoValor){
      setResultado(primeiroValor / segundoValor);
      setOperador(<FaDivide />);
      setVisible("visible");
    }
    };

  const limpar = () =>{
    if(primeiroValor || segundoValor || resultado )
    setResultado(0);
    setPrimeiroValor("");
    setSegundoValor("");
    setOperador("");
    setVisible("hidden");
  }

  return (
    <main>
      <h1>CalculaNaWeb</h1>
      <section className='input-section'>
        <input type="number" placeholder='Digite um número' value={primeiroValor} onChange={(event) => {
          setPrimeiroValor(Number(event.target.value));
          }}/>

        <div><span style={{visibility: visible}}>{operador}</span></div>

        <input type="number" placeholder='Digite um número' value={segundoValor} onChange={(event) => setSegundoValor(Number(event.target.value))}/>

      </section>

      <div><span><FaEquals /></span></div>
      
      <section className='resultado-section'>
        <input type="text" readOnly value={resultado ? resultado.toFixed(2) : resultado} />
      </section>

      <section className='btn-section'>
        <button onClick={soma}><FaPlus /></button>
        <button onClick={subtracao}><FaMinus /></button>
        <button onClick={multiplicacao}><FaTimes /></button>
        <button onClick={divisao}><FaDivide /></button>
        <button onClick={limpar}><FaC /></button>
      </section>
      
  </main>
  )
}

export default App
