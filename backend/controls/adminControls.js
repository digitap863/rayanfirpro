const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const collection = require("../config/collection");
const generateToken = require("../utils/jwtToken");
const { ObjectId } = require("mongodb");
const { PROJECT_COLLECTION } = require("../config/collection");
const { GALLERY_COLLECTION } = require("../config/collection");
const { uploadS3 } = require("../middelware/S3");

const Login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (username == "Rayanfiresystems@gmail.com" && password == "password") {
    const token = generateToken(password);
    res.status(200).json(token);
  } else {
    res.status(401).json("Invalid Details");
  }
});

const AddBlog = asyncHandler(async (req, res) => {
  const blogData = req.body;
  const addBlog = await db
    .get()
    .collection(collection.GALLERY_COLLECTION)
    .insertOne(blogData);
  console.log(addBlog);
  if (addBlog) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const DeleteBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteBlog = await db
    .get()
    .collection(collection.GALLERY_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  console.log(deleteBlog, "dm");
  if (deleteBlog) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const viewAllBlog = asyncHandler(async (req, res) => {
  const viewAllBlog = await db
    .get()
    .collection(collection.GALLERY_COLLECTION)
    .find()
    .toArray();
  if (viewAllBlog) {
    res.status(200).send(viewAllBlog);
  } else {
    res.status(500).json("Something Went wrong");
  }
});

const AddProject = asyncHandler(async (req, res) => {
  const Project = req.body;
  const updateProject = await db
    .get()
    .collection(collection.PROJECT_COLLECTION)
    .insertOne(Project);
  console.log(updateProject);
  if (updateProject.acknowledged) {
    // Check if the operation was successful by checking the result object of the insertOne operation
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const DeleteProject = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteProject = await db
    .get()
    .collection(collection.PROJECT_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  console.log(deleteProject);
  if (deleteProject.deletedCount > 0) {
    // Check if the delete operation was successful by checking the deletedCount property of the result object returned from the deleteOne method
    res.status(200).json("success");
  } else {
    res.status(404).json("Something went wrong");
  }
});

const ViewAllProject = asyncHandler(async (req, res) => {
  const projectList = await db
    .get()
    .collection(collection.PROJECT_COLLECTION)
    .find()
    .toArray();
  if (projectList) {
    res.status(200).json(projectList);
  } else {
    res.status(201).json("No Records");
  }
});
const UploadImage = asyncHandler(async (req, res) => {
  console.log(req.file);
  let image = req.file;
  const path = "/images" + "/" + image.filename;
  console.log(path);
  if (path) {
    res.status(200).json(path);
  } else {
    res.status(400).json("Something Went Wrong");
  }
});
const ViewSingleProject = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const SingleProject = await db
    .get()
    .collection(collection.PROJECT_COLLECTION)
    .findOne({ _id: ObjectId(id) });
  if (SingleProject) {
    res.status(200).json(SingleProject);
  } else {
    res.status(400).json("Something went Wrong");
  }
});
const ViewSingleBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const singleBlog = await db
    .get()
    .collection(collection.GALLERY_COLLECTION)
    .findOne({ _id: ObjectId(id) });
  if (singleBlog) {
    res.status(200).json(singleBlog);
  } else {
    res.status(400).json("Something Went Wrong");
  }
});
const ViewAllCareers = async (req, res) => {
  const CareerList = await db
    .get()
    .collection(collection.CAREERS_COLLECTION)
    .find()
    .toArray();
  if (CareerList) {
    res.status(200).json(CareerList);
  } else {
    res.status(201).json("No Records");
  }
};
const DeleteCareers = async (req, res) => {
  const id = req.params.id;
  const deleteCareers = await db
    .get()
    .collection(collection.CAREERS_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });

  if (deleteCareers.deletedCount > 0) {
    // Check if the delete operation was successful by checking the deletedCount property of the result object returned from the deleteOne method
    res.status(200).json("success");
  } else {
    res.status(404).json("Something went wrong");
  }
};
const AddCareers = async (req, res) => {
  const Career = req.body;

  const updateCareer = await db
    .get()
    .collection(collection.CAREERS_COLLECTION)
    .insertOne(Career);

  if (updateCareer.acknowledged) {
    // Check if the operation was successful by checking the result object of the insertOne operation
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
};
module.exports = {
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
};
