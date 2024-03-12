import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Avatar, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import userIcon from "../../static/images/user_icon.png";

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

export default function EditProfileModal({ open, handleClose }) {
  const handleSubmit = (values) => {
    console.log("Handling Modal submit - ", values);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: "",
    },
    onSubmit: handleSubmit,
  });

  const [uploading, setUploading] = React.useState(false);

  const handleImageChange = (event) => {
    console.log("Updating the image");
    setUploading(true);
    console.log(event.target.name);
    const { name } = event.target;
    const file = event.target.files[0];
    formik.setFieldValue(name, file);
    console.log("name - ", name, ", file - ", file);
    setUploading(false);
  };

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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} arie-label="cancel">
                  <CloseIcon />
                </IconButton>
                <p>Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden h-[80vh]">
              <>
                <div className="w-full">
                  <div className="relative">
                    <img
                      className="w-[100%] h-[15rem] object-cover"
                      src="https://cdn.pixabay.com/photo/2020/07/15/13/56/birds-5407779_1280.jpg"
                      alt="profile banner"
                    />
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      name="banner-image"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="flex justify-between items-start mt-5 h-[5rem]">
                    <div className="relative">
                      <Avatar
                        className="transform -translate-y-24"
                        alt="user handle"
                        src={userIcon}
                        sx={{
                          width: "10rem",
                          height: "10rem",
                          border: "4px solid white",
                        }}
                      />
                      <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        name="profile-pic"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <TextField
                    fullWidth
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fullName && Boolean(formik.errors.fullName)
                    }
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    id="bio"
                    name="bio"
                    label="Bio"
                    value={formik.values.bio}
                    onChange={formik.handleChange}
                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                    helperText={formik.touched.bio && formik.errors.bio}
                  />

                  <TextField
                    fullWidth
                    id="website"
                    name="website"
                    label="Website"
                    value={formik.values.website}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.website && Boolean(formik.errors.website)
                    }
                    helperText={formik.touched.website && formik.errors.website}
                  />

                  <TextField
                    fullWidth
                    id="location"
                    name="location"
                    label="Location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.location && Boolean(formik.errors.location)
                    }
                    helperText={
                      formik.touched.location && formik.errors.location
                    }
                  />
                  <div className="my-3">
                    <p className="text-lg">Birth Date . Edit</p>
                    <p className="text-2xl">August 15, 1994</p>
                  </div>
                  <p className="py-3 text-lg">Edit Professional Profile</p>
                </div>
              </>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
