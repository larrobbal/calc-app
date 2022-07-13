//Importación
import logo from './logo.svg';
import './App.css';
import Result from './components/Result'

//Arrow function del componente
const App = ()=>{
  return (
    <div className='react-calculator'>
      <Result value={10}/>
      <div className='numbers'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <div className='functions'>
        <button>Clear</button>
        <button>Del</button>
      </div>
      <div className='math-op'>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </div>
  );
} 

//Exportación
export default App;
