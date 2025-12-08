import React from 'react'
import './login.css';
import axios from 'axios';

const UploadFile = () => {

    const upload = async (e)=>{
        e.preventDefault();
        const formdata = new FormData();
        const name = e.target.document.value;
        formdata.append(name);
        console.log(name,"good");
        const get = localStorage.getItem("token")

        await axios.post("/admin/fileup",formdata,{
            headers:{"Content-Type": "multipart/form-data",
              Authorization: get
            }
        })

    }

  return (
    <div className='bodys'>
      <div className="container">
        <h2>File Upload</h2>
        <form onSubmit={upload} >
          <input type="file" name="document" placeholder="Upload Your File" required />
          <button type="submit">Upload</button>
        </form>
      </div >
    </div>
  )
}

export default UploadFile
