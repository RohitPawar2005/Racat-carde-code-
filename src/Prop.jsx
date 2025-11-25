import React from "react";
import Card from "./Card";
import logo1 from "./assets/aaaaaaaaaaaa.webp";
import logo2 from "./assets/aaaaaaaaaaaa.webp";


import logo3 from "./assets/aaaaaaaaaaaa.webp";
import logo4 from "./assets/aaaaaaaaaaaa.webp";
import logo5 from "./assets/aaaaaaaaaaaa.webp";
import logo6 from "./assets/aaaaaaaaaaaa.webp";



const Card = () =>{
    return (
        <div className="card">
            <Card png={logo1} title={"Card One"} />
            <Card png={logo2} title={"Card Two"} />
            <Card png={logo3} title={"Card Two" }/>
            <Card png={logo4} title={"Card Three"} />
            <Card png={logo5} title={"Card Four"} />
            <Card png={logo6} title={"Card Five"} /> 
            

        </div>
    )
}
