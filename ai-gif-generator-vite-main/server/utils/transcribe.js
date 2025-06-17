async function transcribeVideo(filePath) {
  console.log(`⚠️ Skipping real transcription. Returning mock text for: ${filePath}`);
  return `AI is powerful. Use it wisely. React and OpenAI integration is cool.`;
}

module.exports = { transcribeVideo };
