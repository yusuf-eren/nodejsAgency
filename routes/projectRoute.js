const express = require("express");
const projectController = require("../controllers/projectController.js");
const router = express.Router();

router.route("/add_project").post(projectController.createProject);
router.route("/edit_project").post(projectController.editProject);
router.route("/delete_project").post(projectController.deleteProject);

module.exports = router;
