import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';

function App() {

  const name = 'Fernanda';
  const newName = name.toUpperCase();
  const url ='https://via.placeholder.com/150'

  function sum(a,b){
    return a+b;
  }

  return (
    //No html, podemos utilizar o class, mas se tratando do react o correto é utilizar "className"
    <div className="App">
      <h1>Hello World!</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
      <Frase/>
    </div>
  );
}

export default App;
