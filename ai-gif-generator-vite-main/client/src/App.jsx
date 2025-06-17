import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [file, setFile] = useState(null);
  const [gifs, setGifs] = useState([]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append('video', file);

    const res = await axios.post('/api/process', formData);
    setGifs(res.data.gifs);
  };

  return (
    <div className="app">
      <h1>🎥 AI Video to GIF Generator</h1>
      <input type="text" placeholder="Enter prompt" value={prompt} onChange={e => setPrompt(e.target.value)} />
      <input type="file" accept="video/mp4" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>Generate GIFs</button>
      <div className="gifs">
        {gifs.map((gif, i) => (
          <img key={i} src={`http://localhost:5000/${gif}`} alt={`gif-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default App;
