
import React, { useEffect, useState } from 'react'
import '../CSS/App.css'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission


        try {
            const responce = await fetch('http://localhost:3001/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (responce.ok) {
                const responceData = await responce.json();
                console.log(responceData);

                localStorage.setItem('jwt-token',responceData.token);
                setLoggedIn(true);

            } else if (responce.status === 404 || 401) {
                setError('Invalid Email and password')
            }

        } catch (err) {
            setError('Internal server error');
        }
    }

    useEffect(() => {

        if (loggedIn) {
            navigate('/home');
        }
    }, [navigate, loggedIn])

    return (

        <div id='head'>
            <div className="main-container">
                <h2>Login</h2>
                <div className="form">
                    <form>
                        <label htmlFor="name">Email </label>
                        <input type="email" name="email" value={data.email} placeholder="Enter email" onChange={handleInputChange} required />
                        <label htmlFor="name">Password </label>
                        <input type="password" name="password" value={data.password} placeholder="Enter password" onChange={handleInputChange} required />
                        <button className='btn-login' onClick={handleLogin}>Login</button>
                        <Link to={'/register'}><span className='span'>Don't Have an account</span></Link>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    )
}

export default Login
