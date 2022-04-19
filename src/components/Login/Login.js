import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { signInUsingGoogle } = useAuth();
    
    const redirect_uri = location.state?.from || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(() => {
                navigate(redirect_uri);
            })
    };
    
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handleGoogleSignIn}>Google sign in</button>
        </div>
    );
};

export default Login;