import axios from 'axios'
import { useState } from 'react'


const UsersCards = ({user, getAllUsers, setUpdateUser, handleOpenModal}) => {
  const [openModalDelete, setOpenModalDelete] = useState(false)

  const deleteUser =() =>{
    handleOpenModalD()
        const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
        axios.delete(URL)
        .then(res => {
          console.log(res.data)
        })
        .catch((err) => console.log(err)) 
  }

  const update = ()=>{
    handleOpenModal()
    setUpdateUser(user)
  }
  const handleCloseModalD = () =>{
    setOpenModalDelete(false)
    getAllUsers()
  }
  const handleOpenModalD = () =>{
    setOpenModalDelete(true)

  }

  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <>
      <div className='container__card' >
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
      <div className={openModalDelete?"modal_delete": "modal_none"} onClick={handleCloseModalD}>
        <div className="delete_modal" onClick={handleModalContainerClick}>
          <div className="close" onClick={handleCloseModalD}><i className='bx bx-x'></i></div>
          <h3>Usuario Eliminado</h3>
          <p>El usuario {`${user.first_name} ${ user.last_name}`} ha sido eliminado</p>
          <button className='close_modal_btn' onClick={handleCloseModalD}> Aceptar</button>
        </div>
      </div>
    </>

  )
}

export default UsersCards
