const router = require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");

// Create Project
router.post("/", auth, async (req, res) => {
    try {
        const project = await Project.create({
            name: req.body.name,
            createdBy: req.user.id
        });

        res.status(201).json(project);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Get Projects (only user's)
router.get("/", auth, async (req, res) => {
    try {
        const projects = await Project.find({
            createdBy: req.user.id
        });

        res.json(projects);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;