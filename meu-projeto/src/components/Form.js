import {UseState, useState} from 'react';


function Form(){
    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(name);
        console.log(password);
        console.log('Cadastrou o usuário!');
    }
    //Usando useState
    //const [name, setName] = useState('Fernanda');
    const [name, setName] = useState();
    const [password, setPassword] = useState();



    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome </label>
                    {/* Capturando o valor digitado pelo usuário com o setName */}
                    {/*<input type="text" id="name" name="name" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}></input>*/}
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Senha </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value= "Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;