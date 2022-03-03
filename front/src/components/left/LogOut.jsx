import cl from '../../styles/Left.module.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
const LogOut = (props) => {
    let [state, setState] = useState('');

    //setState(prev => prev.change != props.change ? props.change : '')
    const auth = useSelector(state => state.authReducer.auth);
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch({type: "SET_AUTH", payload: false});
        //localStorage.setItem('auth', 'false');
        localStorage.removeItem('auth');
    }
    return (
        <div style={{textAlign: 'center'}}>
            {/* <AuthButton name="Выйти" style={{width: 'auto'}} onClick={logOut}/> */}
            <Button onClick={logOut}>Выйти</Button>
        </div>
    )
}

export default LogOut