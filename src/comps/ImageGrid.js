import React from 'react';
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion';

const ImageGrid = ( {setSelected} ) => {
    const {docs} = {
        docs: [
            {                
                url: 'https://media.istockphoto.com/photos/picking-the-right-paint-paint-sample-color-swatch-picture-id92241441?b=1&k=20&m=92241441&s=170667a&w=0&h=OudUCphkJO9Gx9AdVpYIIypg48ELx72Zd46W818fTa8=',                
            },
            {                
                url: 'https://fujifilm-x.com/wp-content/uploads/2019/08/xc16-50mmf35-56-ois-2_sample-images03.jpg',                
            }
        ]
    }

    return ( 
        <div className="img-grid">
            {docs && docs.map(doc =>(
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{opacity:1}}
                onClick={() => setSelected(doc.url)}>
                    <motion.img src={doc.url} alt="Image Broken" 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                    />
                </motion.div>
            ))}
        </div>     
     );
}
 
export default ImageGrid;