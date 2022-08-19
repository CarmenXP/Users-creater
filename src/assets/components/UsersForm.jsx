import React from 'react'

const UsersForm = () => {
  return (
    <form className='form'>
        <h1>New User</h1>
        <ul className='form_list'>
            <li className='form_item'>
                <i className='bx bxs-user'></i>
                <input type="text" placeholder='first name'/>
                <input type="text"  placeholder='last name'/>
            </li>
            <li className='form_item'>
                <i className='bx bxs-envelope'></i>
                <input type="text" placeholder='email'/>
            </li>
            <li className='form_item'>
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder='password'/>
            </li>
            <li className='form_item'>
                 <i className='bx bxs-cake'></i>
                <input type="date" />
            </li>
        </ul>
        
        
        
        <button className='form_btn'>upload</button>
       
    </form>
  )
}

export default UsersForm