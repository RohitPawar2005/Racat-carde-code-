import React from "react";
// import { useNavigate } from "react-router-dom";
const Card = ({png , title}) => {
    // const navigate = useNavigate();
    // const handleClick = () => {
        // navigate('/details', { state: { title: title } });
    // }   
    return (
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img src={png}  alt=""/>    
            <h3 className="card-title">{title}</h3>
        </div>
    )
};
export default Card;