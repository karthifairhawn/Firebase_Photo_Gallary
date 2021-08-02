import React from "react";

const Modal = ( {setSelected, selected} ) => {

    const handleClose = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelected(null);
        }        
    }

    return ( 
        <div className="backdrop" onClick={handleClose}>
            <img src={selected} alt="Image-enlarged" />
        </div>
     );
}
 
export default Modal;