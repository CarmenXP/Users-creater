import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForm from './assets/components/UsersForm'
import UsersCards from './assets/components/UsersCards'
import axios from 'axios'

function App() {
  //states
  const [allUsers, setAllUsers] = useState()
  const [updateUser, setUpdateUser] = useState()

  //functions
  const getAllUsers = () =>{
    const URL = 'https://users-crud1.herokuapp.com/users/'
      axios.get(URL)
      .then(res => setAllUsers(res.data))
      .catch(err=> console.log(err))

  }

  //life cicles

  useEffect(() => {
    getAllUsers()
  }, [])

  console.log("todos los users",allUsers)
  console.log('update...',updateUser)
  

  return (
    <div className="App">
      <header className='header'>
        <h1> <i className='bx bx-user-circle'></i> Usuarios</h1>
        <button className='header__btn'>
          <i className='bx bx-plus'></i> 
          Crear usuario 
        </button>
      </header>
 
      <div className="modal__container">
        <UsersForm
          getAllUsers={getAllUsers}
          updateUser={updateUser}
          setUpdateUser={setUpdateUser}
        />
      </div >
      <div className="cards">
        {
          allUsers?.map(user =>(
            <UsersCards
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpdateUser={setUpdateUser}
            />
          
          ))
        }
      </div>
    </div>
  )
}

export default App
