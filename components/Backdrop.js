// import React, { useState } from "react";
const Backdrop = props =>{
    return (
        <div className="backdrop" onClick={props.onCancel}></div>
    )
};

export default Backdrop;