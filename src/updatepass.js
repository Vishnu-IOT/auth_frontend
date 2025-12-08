import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';

function Updatepass() {
    const search = new URLSearchParams(window.location.search);
    const token = search.get("temp_token");

    const password = async (e) => {
        e.preventDefault();

        if (e.target.npassword.value === e.target.cpassword.value) {
            await axios.post('/admin/savepass',{"token":token,"password":e.target.npassword.value},{
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        }).then((data)=>alert("Password has been Updated."))
        }
        else{
            alert("Please make sure your passwords match")
        }
    }

    return (
        <div className='bodys'>
            <div className="container">
                <h2>Forget Password</h2>
                <form onSubmit={password} >
                    <input type="password" name="npassword" placeholder="New Password" required />
                    <input type="password" name="cpassword" placeholder="Confirm Password" required />
                    <button type="submit">Submit</button>
                    <p>Back to Login -&gt; <Link to="/login">Login</Link> </p>
                </form>
            </div >
        </div>
    )
}

export default Updatepass
