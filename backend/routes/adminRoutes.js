const express = require("express");
const router = express.Router();
const path = require("path");
const name = path.resolve();
const { verifyToken } = require("../middelware/jwtToken");
const {
  Login,
  AddBlog,
  DeleteBlog,
  viewAllBlog,
  AddProject,
  DeleteProject,
  ViewAllProject,
  UploadImage,
  ViewSingleProject,
  ViewSingleBlog,
  ViewAllCareers,
  DeleteCareers,
  AddCareers,
} = require("../controls/adminControls");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, name + "/" + "images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, Date.now().toString() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.route("/login").post(Login);
router.route("/add-blog").post(AddBlog);
router.route("/delete-blog/:id").delete(DeleteBlog);
router.route("/view-all-blog").get(viewAllBlog);
router.route("/add-project").post(AddProject);
router.route("/deleting-project/:id").delete(DeleteProject);
router.route("/view-all-project").get(ViewAllProject);
router.route("/view-single-project/:id").get(ViewSingleProject);
router.route("/view-single-blog/:id").get(ViewSingleBlog);
router.route("/view-all-careers").get(ViewAllCareers);
router.route("/delete-careers/:id").delete(DeleteCareers);
router.route("/Add-careers").post(AddCareers);
router.route("/image-uploading").post(upload.single("image"), UploadImage);
    
module.exports = router;
