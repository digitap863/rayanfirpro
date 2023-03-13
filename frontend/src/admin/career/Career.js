import { React, useState, useEffect } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Project() {
  const [loading, setLoading] = useState(false);
  const [Project, setProject] = useState([]);
  const adminToken = localStorage.getItem("adminToken");
  const [images, setImages] = useState();
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-careers");
        setProject(data);
      } catch (error) {}
    })();
  }, [loading]);

  const DeleteBlog = async (id) => { 
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const config = {
            headers: {
              "auth-token": adminToken,
            },
          };
          await axios
            .delete(`/api/admin/delete-careers/${id}`, config)
            .then((res) => {
              setLoading(!loading);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        swal("Your Data Is Safe");
      }
    });
  };
  const AddCareers = async () => {
    const obj = {
      Image: images,
    };
    if (images) {
      try {
        const { data } = await axios.post("/api/admin/Add-careers", obj);
        handleClose();
        console.log(data);

        setLoading(!loading);
      } catch (error) {
        setError("Something Went Wrong");
      }
    } else {
      setError("Please Update Field");
    }
  };
  const FileUploader = async (e) => {
    setImageLoading(true);
    let formData = new FormData();
    const file = e.target.files[0];
    console.log(file, ",");
    //   const fileName = e.target.files[i].name;
    formData.append("image", file);
    try {
      const { data } = await axios.post(
        "/api/admin/image-uploading",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setImageLoading(false);
      setImages(data);
    } catch (error) {
      setImageLoading(false);
    }
  };
  return (
    <div
      className="tableMain"
      style={{ marginLeft: "5rem", marginTop: "4rem" }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <form>
            <div class="row" style={{ marginLeft: "2rem", paddingTop: "4rem" }}>
              <label>Add Images</label>
              <div class="input-group input-group-icon">
                <input
                  type="file"
                  onChange={(e) => {
                    FileUploader(e);
                  }}
                  placeholder="Enter Feature Name"
                />
              </div>
            </div>
            <div
              class="input-group input-group-icon"
              style={{ display: "contents", float: "left" }}
            >
              {imageLoading && (
                <Oval
                  height={30}
                  width={30}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              )}

              {images && (
                <img
                  src={images}
                  style={{ width: "7rem", height: "7rem" }}
                ></img>
              )}
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <div style={{ textAlign: "center" }}>
              <a
                onClick={AddCareers}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#4CAF50",
                  border: "none",
                  color: "white",
                  padding: "8px 8px",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "3px",
                  display: "inline-block",
                  fontSize: "16px",
                  marginRight: "1rem",
                  marginTop: "2rem",
                }}
              >
                SUBMIT
              </a>
            </div>
          </form>
        </Box>
      </Modal>
      <button
        className="addBtn"
        style={{
          marginLeft: "70%",
          marginBottom: "1%",
          padding: "7px",
          marginTop: "2rem",
          color: "white",
          backgroundColor: "cornflowerblue",
          border: "aliceblue",
          borderRadius: "11px",
        }}
        onClick={handleOpen}
      >
        ADD IMAGE
      </button>
      <div class="header_fixed">
        <table>
          <thead>
            <tr>
              <th>S No.</th>
              <th>Image</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Project.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={items?.Image} />
                  </td>

                  <td>
                    <button
                      onClick={(e) => {
                        DeleteBlog(items._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project;
