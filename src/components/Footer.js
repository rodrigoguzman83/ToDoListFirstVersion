import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const footer = {
    position: "absolute",
    bottom: "0",
    width: "60%",
    height: "60px",
    lineHeight: "60px",
    backgroundColor: "#212529",
  };

  const date = new Date();

  return (
    <>
      <footer style={footer} className="mb-3">
        <Container>
          <p className="text-white">
            Luis Rodrigo Guzman -{" "}
            {date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear()}
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
