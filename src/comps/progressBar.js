import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgresBar = ( {file, setFile }) => {
    const { progress, url } = useStorage(file);


        if(url && file){
            setFile(null);
        }

    return ( 
        <motion.div className="progress-bar" 
            initial={{width:0}}
            animate={{width: progress + '%'}}        
        >            
        </motion.div>
     );
}
 
export default ProgresBar;