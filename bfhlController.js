 const processData = require('../utils/processData');

const getOperationCode = (req, res) => {
    res.json({ operation_code: 1 });
};

const postProcessData = (req, res) => {
    try {
        const { data } = req.body;
        if (!Array.isArray(data)) {
            return res.status(400).json({ error: "Invalid input format" });
        }
        res.json(processData(data));
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getOperationCode, postProcessData };
