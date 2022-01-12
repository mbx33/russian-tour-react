import React from "react";
import "./styles/index.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footerContainer">
      <ul style={{ color: "#F4F9E9" }}>
        <FacebookIcon sx={{ fontSize: 50 }} />
        <InstagramIcon sx={{ fontSize: 50 }} />
      </ul>
    </div>
  );
}

export default Footer;
