import "./coworker.css"
import { TiDelete } from "react-icons/ti"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Coworker = (props) =>{
    const {name, job, photo, id, fav} = props.data
    const { primaryColor, deleteCoworker, like } = props

    //condición ? verdadero: falso
    return <div className="colaborador">
        <TiDelete className="eliminar" onClick={() => deleteCoworker(id)}/>
        <div className="encabezado" style={{backgroundColor:primaryColor}}>
            <img src={photo} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{job}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/>:<AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Coworker