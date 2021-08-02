import React from 'react';
import useFirestore from '../hooks/useFirestore'


const ImageGrid = ( {setSelected} ) => {
    const {docs} = useFirestore('images');

    return ( 
        <div className="img-grid">
            {docs && docs.map(doc =>(
                <div className="img-wrap" key={doc.id}
                onClick={() => setSelected(doc.url)}>
                    <img src={doc.url} alt="Image Broken" />
                </div>
            ))}
        </div>     
     );
}
 
export default ImageGrid;