import Button from './events/Button';

function Evento(/*{numero}*/){

    function meuEvento(){
        console.log(`Ativando primeiro evento!`);
    }

    function segundoEvento(){
        console.log('Ativando o segundo evento');
    }

    return(
        <div>
            <p>Clique para ativar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            {/*<button onClick={meuEvento} >Ativar</button>*/}
        </div>
    )
}

export default Evento;