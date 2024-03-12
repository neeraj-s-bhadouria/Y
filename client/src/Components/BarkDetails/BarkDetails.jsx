import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import BarkCard from "../BarkCard/BarkCard";
import { Divider } from "@mui/material";

const BarkDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <React.Fragment>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Bark</h1>
      </section>

      <section>
        <BarkCard />
        <Divider sx={{ margin: "2rem" }} />
      </section>

      <section>
        {[1, 1, 1, 1, 1].map((item) => (
          <BarkCard />
        ))}
      </section>
    </React.Fragment>
  );
};

export default BarkDetails;
