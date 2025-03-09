import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import NavHeaderButton from "./NavHeaderButton";
import { useNavigate } from 'react-router-dom';

const NavHeader = () => {
    const navigate = useNavigate();
    const checkToken = localStorage.getItem('authToken');
    //console.log(authToken); // uncomment to check if authToken is exists for debugging
    const navigatePage = checkToken ? '/home' : '/'

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px'}}>
                <h1 className="font-weight-light display-1" style={{marginRight: '20px', cursor: 'pointer'}} onClick={() => navigate(navigatePage)}>
                    The Socket
                </h1>
                <ButtonGroup as="nav">
                    <NavHeaderButton 
                        target ='/login'
                        label = "Login/Register"
                    />
                </ButtonGroup>
            </div>
        </div>
    );
};
export default NavHeader;