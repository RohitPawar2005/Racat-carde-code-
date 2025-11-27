import React from "react";
// import './Footer.css'
// import Logo from './assets/rohitlogo1.avif'


function Footer(){
    return(
            <footer >
                
                <div className="foot-panel2 bg-red-800">
                    <ul>
                        <p>QUICK LINKS</p> <br />
                       
                        <a>Our barnds</a>
                        <a>Shop</a>
                        <a>Bespoke Weddinge</a>
                        <a>Coporate Gifting</a>
                        <a>About Us</a>
                        <a>Contact Us</a>
                    </ul>
                    <ul>
                        <p>POLICIES</p> <br />
                       
                        <a>Payment & Shipping</a>
                        <a>Return & Refund</a>
                        <a>Terms of Service</a>
                        <a>Privacy Pollicy</a>
                      
                    </ul>
                    <ul>
                        <p>CONTACT</p><br />
                        <p>+91 7828915609</p>
                        <p>rohitpawar60902@gmail.com</p>
                        <p>chetak Road, mp nagar, bhopal, 560663</p>
                         
                    </ul>
                    <ul>
                       <p>NEWSLETTER</p>
                       <br />
                       <p>Subscribe to receive updates,<br /> access to exclusive deals,<br /> and more.</p>
                    </ul>
                </div>
                <div className="rohit">
              <div className="logo2">
               <img src={Logo} alt="logo" className="hello"/>



              </div>
               </div>
               <div className="bg-red-800 text-center p-3 text-white"> <br />
               <h1 className=" italic text-amber-400 ">TASTE tbe LEGACY of CRAFTSMANSHIP</h1> <br /><br />


              <h3>© Copyright 2025, DADUS...</h3> 

               </div>
            
            </footer>
    )

}

export default Footer






