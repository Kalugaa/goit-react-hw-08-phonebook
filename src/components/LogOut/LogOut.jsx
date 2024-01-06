import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOutThunk } from 'store/operations'
import { FormButton, StyledP } from './LogOut.styled'



const LogOut = ({ email }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(logOutThunk())
        navigate('/login')

    }

    return (<>
        <li>
            <FormButton type='button' onClick={handleClick}>Logout</FormButton>
        </li>
        <li>
            <StyledP>{email}</StyledP>
        </li>
    </>
    )
}

export default LogOut


