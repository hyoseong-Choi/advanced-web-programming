import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { inputUser, okClick, resetUser} from "../modules/userSlice";

const Layout = styled.div`
    margin-top : 10px;
    padding : 20px;
`;

const User = (props) => {
    const username = useSelector(state=>state.user);
    const isClick = useSelector(state=>state.isClick);
    const dispatch = useDispatch();

    const handleOnUser = (e) => {
        dispatch(inputUser(e.target.value));
    }
    const handleOnButtonClick = (e) => {
        dispatch(okClick());
    }
    const handleOnReset = (e) => {
        e.preventDefault();
        dispatch(resetUser());
    }
    return(
        <Layout>
            <h2>Redux Toolkit</h2>
            <input type="text" value={username} onChange={handleOnUser}></input>
            <button onClick={handleOnButtonClick} value="onClick">Ok</button>
            <button onClick={handleOnReset} value="reset">Reset</button>
            <br/>
            {isClick && <label>{username}</label>}
        </Layout>
    );
}

export default User;