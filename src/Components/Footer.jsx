import React from "react";
import { useDetailState } from "./utils/global.context";

const Footer = () => {
  const { state } = useDetailState();

  return (
    <footer >
      <p style={{background: 'crimson', width:'100%'}}>Powered by</p>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop:'5px'}}>
        <img 
        src="./../../public/images/DH.png"
        />
        <div className="icons">
          <img
            src="./../../public/images/ico-facebook.png"
            style={{ width: "20px"}}
            
          />
          <img
            src="./../../public/images/ico-instagram.png"
            style={{ width: "20px"}}
          />
          <img
            src="./../../public/images/ico-tiktok.png"
            style={{ width: "20px"}}
          />
          <img
            src="./../../public/images/ico-whatsapp.png"
            style={{ width: "20px"}}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
