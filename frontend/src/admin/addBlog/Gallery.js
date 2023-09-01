import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

import "./AddBlog.css";

function AddProject() {
  const [projectName, setProjectName] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState();
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState();
  const Navigate = useNavigate();

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

  const AddProject = async () => {
    const obj = {
      Name: projectName,
      Image: images,
    };
    if (projectName  && images) {
      try {
        const { data } = await axios.post("/api/admin/add-blog", obj);
        Navigate("/view-all-gallery");
      } catch (error) {
        setError("Something Went Wrong");
      }
    } else {
      setError("Please Update Field");
    }
  };
  return (
    <div class="container ms-5" style={{ marginTop: "5rem" }}>
      <form>
        <div class="row" style={{ marginLeft: "2rem",paddingTop:"4rem" }}>
          <label>Heading</label>
          <div class="input-group input-group-icon">
            <input
              type="text"
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
              placeholder="Heading"
              required
            />
            <div class="input-icon">
              <i class="fa fa-user"></i>
            </div>
          </div>
          <label>Add Images</label>
          <div class="input-group input-group-icon">
            <input
              className="border-1"
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
            <img src={`/api${images}`} style={{ width: "7rem", height: "7rem" }}></img>
          )}
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div style={{ textAlign: "center" }}>
          <a
            onClick={AddProject}
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
    </div>
  );
}

export default AddProject;
