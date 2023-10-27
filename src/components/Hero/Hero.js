import React, { useState, useEffect } from "react";
import "./hero.scss";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Navigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const Hero = () => {
  const [image, setImage] = React.useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    localStorage.removeItem("sign");
  }, []);

  const handleDemoAccess = () => {
    if (password === "ycdemo") {
      // Replace "yourCorrectPassword" with the actual correct password
      setOpen(false); // Close the modal
      localStorage.setItem("sign", "ok");
      navigate("/demo"); // Navigate to the "/demo" page
      // setImage(true);
    }
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <div className="title">
          <h1 style={{ color: "#044BD9" }}>Autonomous revenue recovery</h1>
          <h2>Converting denials into cash with Generative AI</h2>
        </div>
        <div className="content">
          <div className="desc">
            <div className="line"></div>
            <div className="text">
              <img src="/assets/images/rcmGPT.svg" alt="" />
              <div className="spec-text">
                <h3>
                  Elevate Revenue Management with rcmGPT<sup>TM</sup>:
                </h3>
              </div>
              <h4>
                The premier autonomous platform that recovers revenue by
                seamlessly resubmitting and appealing payer denials.
              </h4>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Link to="/contact">Get Started</Link>
          <Link to="#" onClick={handleOpen}>
            Free demo
          </Link>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Password
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update the password state
                />
                <button onClick={handleDemoAccess}>Submit</button>{" "}
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/images/interface.svg" className="hero-image-svg" />
        {/* {image && (
          <iframe
            src="/demo"
            style={{ width: "100%", minHeight: "500px" }}
          ></iframe>
        )}
        {!image && (
          <img src="/assets/images/interface.svg" className="hero-image-svg" />
        )} */}
      </div>
    </div>
  );
};
