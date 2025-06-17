async function extractGIFClips(transcript, prompt) {
  return [
    { start: 5, duration: 4, caption: 'AI is powerful.' },
    { start: 12, duration: 3, caption: 'Use it wisely.' },
  ];
}

module.exports = { extractGIFClips };
