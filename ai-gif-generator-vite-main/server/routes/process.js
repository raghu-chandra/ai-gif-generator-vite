const express = require('express');
const multer = require('multer');
const { transcribeVideo } = require('../utils/transcribe');
const { extractGIFClips } = require('../utils/clipper');
const { convertToGIFs } = require('../utils/gifmaker');
const router = express.Router();

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');const express = require('express');
const multer = require('multer');
const { transcribeVideo } = require('../utils/transcribe');
const { extractGIFClips } = require('../utils/clipper');
const { convertToGIFs } = require('../utils/gifmaker');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('video'), async (req, res) => {
  const { prompt } = req.body;
  const videoPath = req.file.path;

  try {
    const transcript = await transcribeVideo(videoPath);
    const clips = await extractGIFClips(transcript, prompt);
    const gifs = await convertToGIFs(videoPath, clips);
    res.json({ gifs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Processing failed' });
  }
});

module.exports = router;

  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'video/mp4') {
      cb(null, true);
    } else {
      cb(new Error('Only MP4 videos are allowed!'), false);
    }
  }
});

router.post('/', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No video file uploaded.' });
    }
    
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'No prompt provided.' });
    }

    const videoPath = req.file.path;
    console.log(`Processing video: ${videoPath} with prompt: ${prompt}`);

    const transcript = await transcribeVideo(videoPath);
    const clips = await extractGIFClips(transcript, prompt);
    const gifs = await convertToGIFs(videoPath, clips);

    res.json({ 
      gifs,
      message: 'GIFs generated successfully!'
    });
  } catch (err) {
    console.error('Error during processing:', err);
    res.status(500).json({ 
      error: 'Processing failed',
      details: err.message
    });
  }
});

module.exports = router;