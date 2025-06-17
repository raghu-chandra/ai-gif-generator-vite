#AI-Powered Video to GIF Generator

This is a full-stack application that allows users to upload a video and generate multiple GIFs from it using AI-powered transcript analysis. The project uses OpenAI's Whisper model to transcribe audio, identify clip-worthy moments, and convert them to GIFs using FFmpeg.
Features
- Upload MP4 videos from your device
- Enter a custom **prompt** to guide AI in GIF selection
- Uses **OpenAI Whisper** to transcribe audio
- AI selects relevant clips and converts them to **GIFs**
- Generated GIFs are shown on the frontend
- Built with Vite + React (client) and Node.js + Express (server)
- FFmpeg used for actual GIF generation
 Tech Stack
 Frontend-  React + Vite                    
 Backend- Node.js + Express   
Other Tools- Axios,OpenAI, Whisper API, Multer, FFmpeg

Backend setup
cd server
npm install

Create a .env file in /server:
OPENAI_API_KEY=your_openai_key_here
PORT=5000
Start server:
node index.js

 Frontend setup
cd client
npm install
npm run dev
App runs on: http://localhost:5173
