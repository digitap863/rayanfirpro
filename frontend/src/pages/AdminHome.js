import React from "react";
import Sidebar from "../admin/sidebar/Sidebar";
import Project from "../admin/project/Project";
 
function AdminHome() {
  return (
    <div>
      <Sidebar />
      <Project />
    </div>   
  );
}

export default AdminHome;
