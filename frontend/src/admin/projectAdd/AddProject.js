import axios from "axios";
import React, { useState } from "react";
import "./Addproject.css";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const [projectName, setProjectName] = useState();
  // const [projectHeader, setHeader] = useState();
  const [Paragraph, setParagraph] = useState([]);
  const [description, setDescription] = useState();
  const [images, setImages] = useState();
  const [error, setError] = useState();
  const [imageLoading, setImageLoading] = useState(false);
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
    Paragraph.push({ description: description });
    const obj = {
      Name: projectName,
      paragraph: Paragraph,
      Image: images,
    };

    if (projectName && Paragraph && images) {
      try {
        const { data } = await axios.post("/api/admin/add-project", obj);
        Navigate("/view-all-projects");
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("Please Updated Field");
    }
  };
  const AddParagraph = () => {
    Paragraph.push({ description: description });
    setDescription("");
  };
  return (
    <div class="container ms-5" style={{ marginTop: "5rem" }}>
      <div className="text-center text-uppercase h5 text-decoration-underline">Add Project</div>
      <form>
        <div class="row" style={{ marginLeft: "2rem", paddingTop: "2rem" }}>
          <label>Project Name</label>
          <div class="input-group input-group-icon">
            <input
              type="text"
              className="border"
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
              placeholder="Name"
            />
            <div class="input-icon">
              <i class="fa fa-user"></i>
            </div>
          </div>

          <div class="input-group ">
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="message"
              rows={4}
              className="border-1"
              placeholder="Project Description"
            />
              <div className="small mt-2 mb-2">
            <a className="btn btn-small ms-2  text-light btn-primary" onClick={AddParagraph}>
              Add Another Paragraph
            </a>
          </div>
          </div>
        
          <label>Project Image</label>
          <div class="input-group input-group-icon">
            <input
              type="file"
              onChange={(e) => {
                FileUploader(e);
              }}
              placeholder="Enter Feature Name"
            />
            <div class="input-icon">
              <i class="fa fa-key"></i>
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
              <img src={images} style={{ width: "7rem", height: "7rem" }}></img>
            )}
          </div>
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
