import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const corFundo = {backgroundColor:props.corSecundaria};
    const corBorda = {borderColor: props.corPrimaria};

    return(
        (props.colaboradores.length > 0) ?  <section className='time' style={corFundo}>
                <h3 style={corBorda}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => <Colaborador 
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                    />)}
                </div>            
            </section> : <></>
    );
}

export default Time;