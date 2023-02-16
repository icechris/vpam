import { useState } from 'react' 
import Generator from '../components/generator'
import Table from '../components/table'
import './dashboard.css'
import LoginForm from './loginForm'
import Register from './register'
import House from './house'
import Phone from './number'


const userData = [
    { desc: "new password", pass:"23rhfutdj"},
    { desc: "vault pass", pass:"986598896"},
]

function Dashboard() {
  const [showGenerator, setShowGenerator] = useState(false)
  const[showHouse, setShowHouse] = useState(false);
  const [data, setData]= useState({});

 
 
  const toggleForm = (state,data) => {
    console.log(data);
    setShowHouse(state);
    setData(data);
  }  
 

  const close = () => setShowGenerator(false)

  return (
    <div className='dashboard'>
        <div className="top">
            <button className='btn' onClick={() => setShowGenerator(true)}>Generate</button>
            <input placeholder="Search" className='search' aria-describedby="button-addon3" />
        </div>
        <Table data={userData} toggleForm={toggleForm} />
        { showGenerator && <Generator close={close}/> } 

         {
            showHouse && <House toggleForm={toggleForm}/>
         }
   
    </div>

  )
}

export default Dashboard
