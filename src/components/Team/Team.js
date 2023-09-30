import "./Team.css"
import Coworker from "../Coworker/coworker"
import hexToRgba from 'hex-to-rgba';

const Team = (props) =>{
    //Destructuración
    const {primaryColor, title, id} = props.data
    const { coworkers, deleteCoworker, updateColor, like } = props
    const titleStyle = { 
        borderColor: primaryColor 
    }

    const obj={
        backgroundColor: hexToRgba(primaryColor, 0.6)
    }

    return <>
        { coworkers.length > 0 && 
            <section className="equipo" style={obj}>
                <input
                    type='color'
                    className="input-color"
                    value={primaryColor}
                    onChange={(e) =>{
                        updateColor(e.target.value, id)
                        }
                    }
                />
                <h3 style={titleStyle}>{title}</h3>
                <div className="colaboradores">
                    {
                        coworkers.map((coworker, index) => <Coworker 
                            data={coworker} 
                            key={index} 
                            primaryColor={primaryColor}
                            deleteCoworker={deleteCoworker}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Team