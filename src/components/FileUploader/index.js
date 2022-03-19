import {useState} from 'react';
import './style.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export const FileUploader = ({onSuccess}) =>{
    const [files, setFiles] =useState([]);
    const onInputChange = (e) => {
        console.log(e.target.files)
        setFiles(e.target.files)
    };
    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for(let i =0; i < files.length; i++){
            data.append('file',files[i]);
        }

        axios.post('//localhost:8000/upload', data)
        .then((response) => {
            toast.success('Upload Success')
            onSuccess(response.data)
        })
        .catch((e) => {
            toast.error('upload Error')
        })
    };
    return(
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
              <div class="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                onChange={onInputChange} 
                class="form-control" 
                multiple/>
              </div>
              
           <button>Submit</button> 
          </form>
    )
};