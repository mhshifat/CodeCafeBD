// Import Dependencies
import express from "express";
import jwt from "jsonwebtoken";
import fs, { readdir, readdirSync } from "fs";
import path from "path";

// Import Environment Variables
require("dotenv").config();

// Import Models
import User from "../../models/User";
import Project from "../../models/Project";

// Validators
import projectValidator from "../../validators/projectValidator";

// Setup Router
const router = express.Router();

// ============================
// ========== Routes ==========
// ============================

// Route ==> (GET) ==> /api/projects
router.get("/", async (req, res) => {
  try {
    const getAllProjects = await Project.find({}).sort({ date: -1 });
    if (getAllProjects) {
      return res.status(200).json({
        success: true,
        projects: getAllProjects
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      errors: {
        error: "Something went wrong, please try again later"
      }
    });
  }
});

// Route ==> (POST) ==> /api/projects/add
router.post("/add", async (req, res) => {
  try {
    const { isValid, errors } = projectValidator(req.body);
    if (!isValid) return res.status(400).json({ success: false, errors });
    const currentUser = await jwt.decode(req.body.user, process.env.JWT_SECRET);
    const getUserDetails = await User.findById(currentUser.id);
    if (!getUserDetails.isAdmin) {
      errors.error = "You don't have permission to add a project";
      return res.status(400).json({ success: false, errors });
    }
    const getExistingProject = await Project.findOne({ name: req.body.name });
    if (getExistingProject) {
      errors.error = "A project of this name already exists";
      return res.status(400).json({ success: false, errors });
    }
    const newProject = {
      user: getUserDetails._id,
      name: req.body.name,
      category: req.body.category,
      website: req.body.website,
      github: req.body.github,
      image: req.body.image
    };
    const createProject = await Project.create(newProject);
    if (createProject) {
      getUserDetails.projects.push(createProject);
      getUserDetails.save();
      return res.status(200).json({
        success: true,
        data: { message: "A new project has been created" },
        project: createProject
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      errors: {
        error: "Something went wrong, please try again later"
      }
    });
  }
});

// Route ==> (GET) ==> /api/projects/delete/:id
router.get("/delete/:id", async (req, res) => {
  try {
    const deleteProject = await Project.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      data: {
        message: "One project has been deleted"
      },
      project: deleteProject
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      errors: {
        error: "Something went wrong, please try again later"
      }
    });
  }
});

// Route ==> (POST) ==> /api/projects/update/:id
router.post("/update/:id", async (req, res) => {
  try {
    const { isValid, errors } = projectValidator(req.body);
    if (!isValid) return res.status(400).json({ success: false, errors });
    const getExistingProject = await Project.findById(req.params.id);
    const projectUpdate = {
      name: req.body.name,
      category: req.body.category,
      website: req.body.website,
      github: req.body.github,
      image: req.body.image
    };
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      projectUpdate,
      { new: true }
    );
    if (updatedProject) {
      return res.status(200).json({
        success: true,
        data: { message: "One project has been updated" },
        project: updatedProject
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      errors: {
        error: "Something went wrong, please try again later"
      }
    });
  }
});

// Export Router
export default router;
