//import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
/*
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
*/


function App() {

  /*
  const name = 'Fernanda';
  const newName = name.toUpperCase();
  const url ='https://via.placeholder.com/150';
  const nomeExemplo = 'Maria';

  function sum(a,b){
    return a+b;
  }
  */
  return (

   
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento/>
      <Evento numero ={1}/>
      {/*<Evento numero ={2}/>*/}
      <Form/>
    </div>
    
    //No html, podemos utilizar o class, mas se tratando do react o correto é utilizar "className"
    /*
    <div className="App">
      
      <h1>Hello World!</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
      <Frase/>
      <SayMyName nome="Fernanda"/>
      <SayMyName nome={nomeExemplo}/>
      <Pessoa nome="João" idade="20" profissao="desenvolvedor web" foto="https://via.placeholder.com/150"/>
      <List/>
      
    </div>
    */
   
  );
}

export default App;
