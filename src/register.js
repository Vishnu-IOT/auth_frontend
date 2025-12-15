// import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
// import axios from 'axios';

function Register() {
    // const [change, setchange] = useState('image');
    // const [file, setfile] = useState(null);
    // const check = `${change}/*`;
    const navigate = useNavigate();

    const onhover = async (event) => {
        event.preventDefault();
        // const formdata = new FormData();
        // formdata.append("mobile", event.target.mobile.value);
        // formdata.append("password", event.target.password.value);
        // formdata.append("type", event.target.type.value);
        // formdata.append("media", file);
        // formdata.append("status", event.target.status.value)

        // console.log(event.target.name.value);
        // formdata.append("name", event.target.name.value);
        // formdata.append("email", event.target.email.value);
        // formdata.append("username", event.target.username.value);
        // formdata.append("password", event.target.password.value);

        // axios.post("http://localhost:3000/login", formdata);

        await fetch("https://authbackend-production-b892.up.railway.app/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                // "Content-Type": "multipart/form-data"
                // "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                username: event.target.username.value,
                password: event.target.password.value
            })
        })
            .then((res) => res.json())
            .then(data => { alert(data.success); navigate("/login"); })
            .catch((err) => {
                alert("Email Already Exists. Please Login");
            })

    }

    return (
        <div className='bodys'>
            <div className="container">
                <h2>Register</h2>
                <form onSubmit={onhover}>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="text" name="username" placeholder="UserName" required />
                    <input type="password" name="password" placeholder="Password" required />
                    {/* <select name='type' onChange={(e) => { setchange(e.target.value) }} required>
                        <option>image</option>
                        <option>audio</option>
                        <option>video</option>
                    </select>
                    <input type='file' name='media' accept={check} onChange={(e)=>{setfile(e.target.files[0])}} required />
                    <select name='status' required>
                        <option>able</option>
                        <option>disable</option>
                    </select> */}
                    <button type="submit">Register</button>
                    <p>If You already have an Account? Please <Link to="/login">Login</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Register



