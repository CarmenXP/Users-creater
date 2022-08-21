import axios from 'axios'
import {useEffect}from 'react'
import { useForm } from 'react-hook-form'

const defaultValue={
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''

}

const UsersForm = ({getAllUsers, updateUser, setUpdateUser, handleCloseModal}) => {

    useEffect(() => {
        if(updateUser){
            reset(updateUser)
        }
    }, [updateUser])
    

    const {register, reset, handleSubmit}= useForm()

    const createUser = (data) =>{
        const URL ='https://users-crud1.herokuapp.com/users/'
        axios.post(URL, data)
        .then((res) => {
            console.log(res.data)
            getAllUsers()
        })
        .catch(err => console.log(err))
        reset(defaultValue)
    }

    const updatingUser = (data) =>{
        const URL = `https://users-crud1.herokuapp.com/users/${updateUser.id}/`
        axios.patch(URL, data)
        .then((res) =>{
            console.log(res.data)
            getAllUsers()
        })
        .catch((err) => console.log(err))
    }

    const submit = (data)=>{
        if(updateUser){
            updatingUser(data)
            setUpdateUser()
        }else{
            createUser(data)
        }
        reset(defaultValue)
        handleCloseModal()
    }
    

  return (
    <form className='form' onSubmit={handleSubmit(submit)} >
        
        <h1>{updateUser? 'Actualizar usuario' : 'Nuevo usuario'}</h1>
        <ul className='form_list'>
            <li className='form_item'>
                <i className='bx bxs-user'></i>
                <input {...register('first_name')}type="text" placeholder='first name' id='first_name'/>
            </li>    
            <li className='form_item'>
                <i className='bx bxs-user'></i>
                <input  {...register('last_name')}type="text"  placeholder='last name' id='last_name'/>
            </li>        
            <li className='form_item'>
                <i className='bx bxs-envelope'></i>
                <input {...register('email')} type="text" placeholder='email' id='email'/>
            </li>
            <li className='form_item'>
                <i className='bx bxs-lock-alt'></i>
                <input {...register('password')} type="password" placeholder='password' id='password'/>
            </li>
            <li className='form_item'>
                 <i className='bx bxs-cake'></i>
                <input type="date" {...register('birthday')} id='birthday'/>
            </li>
        </ul>    
        <button className='form_btn'>{updateUser? 'Actualizar' : 'Crear'}</button>   
    </form>
  )
}

export default UsersForm