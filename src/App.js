import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg/myOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  const [showForm, updateShow] = useState(true)
  const [coworkers, updateCoworkers] = useState([{
    id: uuid(),
    team:"Front End",
    photo:"https://github.com/Damanger.png",
    name:"Omar A. Cruz Rmz",
    job:"Practicante",
    fav: true
  }])

  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      title: "Back End",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX Designs",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Inovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ])

  const changeShow = () => {
    updateShow(!showForm)
  }

  //Registrar colaborador
  const registerCoworker = (coworker) => {
    //Spread operator
    updateCoworkers([...coworkers,coworker])
  }

  //Eliminar colaborador
  const deleteCoworker = (id) =>{
    const newCoworkers = coworkers.filter((coworker) => coworker.id !== id)
    updateCoworkers(newCoworkers)
  }

  //Actualizar color de equipo
  const updateColor = (color, id) => {
    const updatedTeams = teams.map((team) => {
      if(team.id === id)
        team.primaryColor = color
      return team
    })
    updateTeams(updatedTeams)
  }

  //Crear equipos
  const createTeam = (newTeam) => {
    updateTeams([...teams,{...newTeam, id: uuid()}])
  }

  const like = (id) => {
    const updatedCoworkers = coworkers.map((coworker) =>{
      if(coworker.id === id)
        coworker.fav = !coworker.fav
      return coworker
    }) 
    updateCoworkers(updatedCoworkers)
  }

  return (
    <div>
      <Header/>
      {/*showForm === true ? <Form/> : <></>*/}
      {showForm && <Form teams={teams.map((team)=> team.title)}
        registerCoworker={registerCoworker} createTeam={createTeam}
      />}
      <MyOrg changeShow={changeShow}/>
      { 
        teams.map((team) => <Team data={team} 
          key={team.title}
          coworkers={coworkers.filter( coworker => coworker.team === team.title)}
          deleteCoworker={deleteCoworker}
          updateColor={updateColor}
          like={like}
        />
        )
      }
      <Footer/>
    </div>
  );
}

export default App;
