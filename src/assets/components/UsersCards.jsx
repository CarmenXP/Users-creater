import axios from 'axios'


const UsersCards = ({user, getAllUsers, setUpdateUser}) => {

  const deleteUser =() =>{
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
    axios.delete(URL)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch((err) => console.log(err))
  }

  const update = ()=>{
    setUpdateUser(user)
  }

  return (
      <div className='container__card'>
        <h3>{`${user.first_name} ${ user.last_name}`}</h3>
        <hr/>
        <p>CORREO</p>
        <p>{user.email}</p>
        <p> CUMPLEAÑOS</p>
        <p> <i className='bx bxs-gift'></i>{user.birthday}</p>
        <hr/>
        <div className="container_btns">
          <button className='container__btn' onClick={deleteUser}><i className='bx bxs-trash'></i></button >
          <button className='container__btn' onClick={update}><i className='bx bxs-pencil'></i></button>
        </div>
      </div>

  )
}

export default UsersCards