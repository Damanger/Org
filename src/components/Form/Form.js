import { useState } from "react"
import "./Form.css"
import Text from "../Text/Text"
import ListOptions from "../ListOptions/options"
import Button from "../Button/button"

const Form = (props) =>{

    const[name, updateName] = useState("")
    const[job, updateJob] = useState("")
    const[photo, updatePhoto] = useState("")
    const[team, updateTeam] = useState("")
    const { registerCoworker, createTeam } = props
    const [title, updateTitle] = useState("")
    const [color, updateColor] = useState("")

    const manageSends = (e) =>{
        e.preventDefault()
        let dataSent = {
            name,
            job,
            photo,
            team
        }
        registerCoworker(dataSent)
    }

    const manageNewTeam = (e) => {
        e.preventDefault()
        createTeam({ title, primaryColor: color })
    }

    return <section className="formulario">
        <form onSubmit={manageSends}>
            <h2>Rellena el formulario para añadir a un colaborador:</h2>
            <Text titulo="Nombre" placeholder="Ingresar nombre" 
                required value={name} updateValue={updateName}/>
            <Text titulo="Puesto" placeholder="Ingresar puesto" 
                required value={job} updateValue={updateJob}/>
            <Text titulo="Foto" placeholder="Ingresar enlace de foto" 
                required value={photo} updateValue={updatePhoto}/>
            <ListOptions value={team} updateTeam={updateTeam} teams={props.teams}/>
            <Button texto="Crear" />
        </form>
        <form onSubmit={manageNewTeam}>
            <h2>Rellena el formulario para crear un equipo:</h2>
            <Text titulo="Título" placeholder="Ingresar título" 
                required value={title} updateValue={updateTitle}/>
            <Text titulo="Color" placeholder="Ingresar color en Hex" 
                required value={color} updateValue={updateColor} type="color"/>
            <Button texto="Registrar equipo" />
        </form>
    </section>
}

export default Form