
//Pacote
import PropTypes from 'prop-types';

function Item({marca,ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>

    );
}

//Propriedade do componente
Item.protoTypes = {
    //Aqui foi definido o tipo, alem de colocar como required
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}


//Propriedade do componente default
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item;