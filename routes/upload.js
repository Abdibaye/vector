import express from 'express'; 
import UploadModel from '../model/uploadmodel.js';
const router = express.Router();

router.post('/', async (req, res) => {
    
    const data = new UploadModel({
        text: req.body.text
    });

    try {
        const savedData = await data.save();
        res.status(201).json(savedData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
