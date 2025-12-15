import React from 'react'
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Otp() {
    const navigate = useNavigate();

    const otpsync = async (e) => {
        e.preventDefault();
        // const formdata = new FormData();
        const otp = e.target.otp.value;
        // formdata.append(otp);
        console.log(otp, "good");
        const get = localStorage.getItem("token")
        await axios.post("https://authbackend-production-b892.up.railway.app/admin/verifyotp", { "otp": otp }, {
            headers: {
                Authorization: get,
                'Content-Type': 'application/json'
            }
        })
            // .then((res) => res.json())
            .then((data) => { console.log(data,"not error"); alert(data.data.success); navigate("http://youtube-clone-theta-liart.vercel.app")})
            .catch((err) => { console.log(data); alert(err.response.data.success) })
    }

    return (
        <div className='bodys'>
            <div className="container">
                <h2>OTP Verification</h2>
                <form onSubmit={otpsync} >
                    <input type="number" name="otp" placeholder="Enter Your OTP" required />
                    <button type="submit">Submit</button>
                </form>
            </div >
        </div>
    )
}

export default Otp



