require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Submission = require('./models/Submission');

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
// Increase payload size limit to accommodate Base64 image uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moreidea';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes

// 1. Create a new submission
app.post('/api/submissions', async (req, res) => {
  try {
    const newSubmission = new Submission({
      data: req.body.data,
      links: req.body.links,
      files: req.body.files,
      date: new Date()
    });
    
    const savedSubmission = await newSubmission.save();
    res.status(201).json(savedSubmission);
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ message: 'Failed to save submission', error: error.message });
  }
});

// 2. Get all submissions (for Admin Dashboard)
app.get('/api/submissions', async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ date: -1 });
    
    // Map _id to id so frontend doesn't need to change its logic too much
    const mappedSubmissions = submissions.map(sub => {
      const obj = sub.toObject();
      obj.id = obj._id.toString();
      return obj;
    });
    
    res.status(200).json(mappedSubmissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ message: 'Failed to fetch submissions', error: error.message });
  }
});

// 3. Delete a complete submission
app.delete('/api/submissions/:id', async (req, res) => {
  try {
    const result = await Submission.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    res.status(200).json({ message: 'Submission deleted successfully' });
  } catch (error) {
    console.error('Error deleting submission:', error);
    res.status(500).json({ message: 'Failed to delete submission', error: error.message });
  }
});

// 4. Delete a specific file from a submission
app.delete('/api/submissions/:subId/files/:fileId', async (req, res) => {
  try {
    const { subId, fileId } = req.params;
    
    // Find submission and pull the file with the specific ID out of the files array
    const updatedSubmission = await Submission.findByIdAndUpdate(
      subId,
      { $pull: { files: { id: fileId } } },
      { new: true }
    );
    
    if (!updatedSubmission) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    
    res.status(200).json({ message: 'File deleted successfully', files: updatedSubmission.files });
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({ message: 'Failed to delete file', error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
