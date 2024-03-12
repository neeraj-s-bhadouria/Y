import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Avatar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import userIcon from "../../static/images/user_icon.png";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";

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

const ReplyModal = ({ open, handleClose }) => {
  const navigate = useNavigate();

  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Barking is required"),
  });

  const handleSubmit = (values) => {
    console.log("Submitting the reply - ", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      barkId: 4,
    },
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex space-x-2">
              <Avatar
                onClick={() => navigate(`/profile/${6}`)}
                className="cursor-pointer"
                alt="userIcon"
                src={userIcon}
              />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="flex cursor-pointer item-center space-x-2">
                    <span className="font-semibold">Maulana Neeraj</span>

                    <span className="text-gray-600">
                      @maulana-neeraj .2m ago
                    </span>
                    <VerifiedIcon
                      alt="verifiedIcon"
                      className="text-[#1d9bf0]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-4">
              <input
                type="text"
                name="content"
                placeholder="Alhamdullilah, Sab Khairiyat?"
                className="border-none outline-none text-xl w-full bg-transparent"
                {...formik.getFieldProps("content")}
              />
              {formik.errors.content && formik.touched.content && (
                <span className="text-red-500">{formik.errors.content}</span>
              )}
            </div>
            <div className="flex justify-between items-center mt-5 pl-6">
              <div className="flex space-x-5 items-center">
                <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                  <ImageIcon className="text-[#1d9bf0]" />
                  <input
                    type="file"
                    name="imageFile"
                    className="hidden"
                    onChange={handleSelectImage}
                  />
                </label>
                <FmdGoodIcon className="text-[#1d9bf0]" />
                <TagFacesIcon className="text-[#1d9bf0]" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} arie-label="cancel">
                  <CloseIcon />
                </IconButton>
              </div>
              <Button
                type="submit"
                className="rounded-full"
                variant="contained"
                sx={{ borderRadius: "20px" }}
              >
                Bark
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ReplyModal;
