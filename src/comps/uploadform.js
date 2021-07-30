import React, { useState } from 'react';
import ProgresBar from './progressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const handleUpload = (e) => {
        var allowed_types = ['image/jpeg','image/jpg','image/png']
        var file = e.target.files[0];
        if(file && allowed_types.includes(file.type)) {
            setFile(file);
            setError(null);
        }else{
            setFile(null);
            setError('Please select an image file(png, jpg)');
        }
    }
    return ( 
        <form>
            <label>
                <input type="file" onChange={handleUpload} />
                <span>+</span>
            </label>      
            <div className="output">
                {error && <div className="error">{error}</div>}     
                {file && <div>{file.name}</div>}
                {file && <ProgresBar file={file} setFile={setFile} />}
            </div>      
        </form>
     );
}
 
export default UploadForm;