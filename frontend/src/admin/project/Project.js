import "./Project.css";
import { React, useState, useEffect } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Project() {
    const [open, setOpen] = useState(false);
    const [widgetLoading, setWidgetLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [Project, setProject] = useState([]);
    const handleClose = () => setOpen(false);
    const adminToken = localStorage.getItem("adminToken");
    const Navigate = useNavigate();

    useEffect(() => {
        (async function () {
            await axios.get("/api/admin/view-all-project").then((res) => {
                setProject(res.data);
            });
        })();
    }, [loading]);

    const DeleteProject = async (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    // const config = {
                    //   headers: {
                    //     "auth-token": adminToken,
                    //   },
                    // };
                    await axios
                        .delete(`/api/admin/deleting-project/${id}`)
                        .then((res) => {
                            setLoading(false);
                            setLoading(true);
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
    // const DeleteProject = async (id) => {
    //   try {
    //     const { data } = await axios.delete(`/api/admin/deleting-project/${id}`);
    //     setLoading(true);
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    return (
        <div className="tableMain " style={{ marginLeft: "5rem", marginTop: "6rem" }}>
            <div className="d-flex align-items-end justify-content-end">
                <button
                    className="btn btn-success small mr-3 mb-1"
                    onClick={() => {
                        Navigate("/add-project");
                    }}
                >
                    <p className="small text-light">ADD PROJECT</p>
                </button>
            </div>
            <div class="header_fixed ">
                <table>
                    <thead>
                        <tr>
                            <th className="text-uppercase small border-right">S No.</th>
                            <th className="text-uppercase small border-right">Image</th>
                            <th className="text-uppercase small border-right">Name</th>
                            <th className="text-uppercase small border-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Project.map((items, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={items.Image} />
                                    </td>
                                    <td>{items.Name}</td>

                                    <td>
                                        <button
                                        
                                            className="bg-light btn-small p-0 rounded-0"
                                            onClick={(e) => {
                                                DeleteProject(items._id);
                                            }}
                                        >
                                            <DeleteIcon className="text-danger"/>
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
