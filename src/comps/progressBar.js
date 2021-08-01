import React from 'react';
import useStorage from '../hooks/useStorage';
import { useEffect } from 'react';

const ProgresBar = ( {file, setFile }) => {
    const { url, progress } = useStorage(file);
    console.log(progress,url);
    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url]);
    return ( 
        <div className="progress-bar" style={ {width: progress+'%'}}>
            
        </div>
     );
}
 
export default ProgresBar;