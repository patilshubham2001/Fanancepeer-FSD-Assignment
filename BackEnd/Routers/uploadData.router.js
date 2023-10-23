// Routers/data.router.js
const express = require('express');
const router = express.Router();
const { uploadData, displayData } = require('../Controllers/data.controller');
const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadPath = path.join(__dirname, '..', 'uploads');
//         cb(null, uploadPath);
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route('/upload').post(upload.single('file'), uploadData);
router.route('/display').get(displayData);

module.exports = router;
