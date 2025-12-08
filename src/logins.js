import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
// import axios from 'axios';

function Login() {

  // const [give, setgive] = useState([]);
  const navigate = useNavigate();
  const [bool, setbool] = useState(false);

  // const location = useLocation();
  //   const given = location.state;

  const success = async (e) => {
    e.preventDefault();

    await fetch("/admin/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
        ph_no: e.target.ph_no.value
      })
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.Token);
        if (data.success) {
          setbool(data.success);
          alert("Your Credentials are Verified. OTP sent successfully.");
          // console.log(give);
        }
        else {
          alert("Your are not yet Register");
        }
      })

    // await axios.get("/admin/values", {
    //   headers: {
    //     Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ29nbGUiLCJlbWFpbCI6Imdvb3cyZ2xlQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZjIxMSIsInBhc3N3b3JkIjoiRjIxMSIsImlhdCI6MTc2NDkzMTA4MiwiZXhwIjoxNzY0OTM0NjgyfQ.bYojhiQ29TBs5_5s9LZTD67Ghxe4ZwW3Npz21SA--5M"
    //   }
    // })
    //   .then((data) => { setgive(data.data); });
    // console.log(response);
    // if (response.success) {
    //   setbool(response.success);
    //   alert("Your Credentials are Verified");
    //   // console.log(give);
    // }
    // else {
    //   alert("Your are not yet Register");
    // }

  }
  if (bool) {
    navigate("/otp");
  }

  return (
    <div className='bodys'>
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={success}>
          <input type="text" name="username" placeholder="UserName" required />
          <input type='number' name='ph_no' placeholder='Phone Number' required />
          <input type="password" name="password" placeholder="Password" required />
          <p className='forget'><Link to="/email">Forget Password?</Link> </p>
          <button type="submit">Login</button>
          <p>Don't have an Account? Please <Link to="/">Register</Link> </p>
        </form>
      </div >
    </div>
  )
}

export default Login
