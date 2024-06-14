import  { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setUser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                name="username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Name" 
            />
            <input 
                type="password" 
                name="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
