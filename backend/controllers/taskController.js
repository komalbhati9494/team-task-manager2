const Task = require("../models/Task");

// Create Task
 exports.createTask = async (req, res) => {
    try {
        const { title, description, project } = req.body;

        const task = await Task.create({
            title,
            description,
            project,
            assignedTo: req.user.id   // 🔥 important
        });

        res.status(201).json(task);
    } catch (err) {
        res.status(500).json(err.message);
    }
};
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            assignedTo: req.user.id
        })
        .select("-__v")  // 🔥 removes __v
        .populate("assignedTo", "name email")
        .populate("project", "name");

        res.json(tasks);
    } catch (err) {
        res.status(500).json(err.message);
    }
};