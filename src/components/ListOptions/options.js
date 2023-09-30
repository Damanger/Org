import "./options.css"

const ListOptions = (props) =>{

    const manageChange = (e) =>{
        props.updateTeam(e.target.value)
    }

    return <div className="options">
        <label>Equipo</label>
        <select value={props.value} onChange={manageChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.teams.map( (team, index) => <option key={index}value={team}>{team}</option>)}
        </select>
    </div>
}

export default ListOptions