import React from "react";
import Card from "./Card";
import "./Card.css";

import img1 from "./assets/aaaaaaaaaaaa.webp"
import img2 from "./assets/aaaaaaaaaaaa.webp"
import img3 from "./assets/aaaaaaaaaaaa.webp"
import img4 from "./assets/aaaaaaaaaaaa.webp"
import img5 from "./assets/aaaaaaaaaaaa.webp"
import img6 from "./assets/aaaaaaaaaaaa.webp"




const Pre_Owned_Cars = () => {
  return (
    <>
      <div mithai="con"  >
          
        <div >
        <Card pimg={img1} mithai={"img 5 Series 520d"} price={700} des={""} Add={"add card"} but={"Buy Now"} />
        
        <Card pimg={img2} mithai={"img 5 Series review"} price={700} des={""} Add={"add card"} but={"Buy Now"} />
        <Card pimg={img3} mithai={"img 3 Series Gran"} price={500} des={""} Add={"add card"} but={"Buy Now"} />
        <Card pimg={img4} mithai={"img 7 Series iXDrive"} price={800} des={""} Add={"add card"} but={"Buy Now"} />
        <Card pimg={img5} mithai={"img 5 Series 520d"} price={700} des={""} Add={"add card"} but={"Buy Now"} />
        <Card pimg={img6} mithai={"img X3 Review "} price={500} des={""} Add={"add card"} but={"Buy Now"} />
       </div>
      
      </div>
      
    </>
  );
};

export default Pre_Owned_Cars;
