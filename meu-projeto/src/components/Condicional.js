import {useState} from 'react';

function Condicional(){

    const [email,setEmail] = useState();
    const [userEmail,setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        console.log('Testando');
        //console.log(userEmail);
        setUserEmail(email);
    }

    function limparEmail(e){
        setUserEmail('');
    }

    return(
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e)=> setEmail(e.target.value)}/>
            </form>
            <button onClick={enviarEmail}>Enviar email</button>

            {userEmail &&(
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </div>
    )       

    
}

export default Condicional;