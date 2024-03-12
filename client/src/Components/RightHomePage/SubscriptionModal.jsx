import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from "@mui/icons-material/Verified";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

const features = [
  {
    id: 1,
    description: "Priorities Ranking in conversation and Search",
  },
  {
    id: 1,
    description: "Instant notifications for Namaaz",
  },
  {
    id: 1,
    description: "Everyday for once, you can give Azaan also",
  },
  {
    id: 1,
    description: "Let fellow Jihadis knows that you remember Maqsad",
  },
];

const SubscriptionModal = ({ open, handleClose }) => {
  const [plan, setPlan] = React.useState("Annually");
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-3">
              <IconButton onClick={handleClose} arie-label="cancel">
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-300 shadow-lg">
                <h1 className="text-xl pr-5">
                  Once approved, the subscribers will get a verified badge for
                  their profile.
                </h1>
                <VerifiedIcon
                  alt="verifiedIcon"
                  className="text-[#1d9bf0] w-24 h-24"
                />
              </div>
              <div className="flex justify-between border rounded-full px-5 py-3 border-gray-500">
                <div>
                  <span
                    className={`${
                      plan === "Annually" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className="text-green-500 text-sm ml-5">Save 12%</span>
                </div>
                <p
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>
              <div className="space-y-3">
                {features.map((item) => (
                  <div className="flex items-center space-x-5" key={item.id}>
                    <FiberManualRecordIcon
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="cursor-pointer flex justify-center text-white rounded-full px-5 py-3 bg-gray-900">
                <span className="line-through">₹ 8,181/year</span>
                <span className="px-5">₹ 7,200/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SubscriptionModal;
