import React from 'react'
import './login.css';
import axios from 'axios';

function Email() {

    const forgetpass = async (e) => {
        e.preventDefault();
        await axios.post("https://authbackend-production-b892.up.railway.app/admin/emailverify", { "email": e.target.email.value })
            .then((data) => {alert(data.data.success);})
            .catch((err)=>alert("Email doesn't Exists. Enter your correct Email"))



    }
    return (
        <div className='bodys'>
            <div className="container">
                <h2>Forget Password</h2>
                <form onSubmit={forgetpass} >
                    <input type="text" name="email" placeholder="Enter your Email ID" required />
                    <button type="submit">Submit</button>
                </form>
            </div >
        </div>
    )
}

export default Email


