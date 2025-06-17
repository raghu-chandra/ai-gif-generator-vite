const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

function convertToGIFs(videoPath, clips) {
  return Promise.all(
    clips.map((clip, index) => {
      const outputPath = path.join('outputs', `output_${index}.gif`);
      return new Promise((resolve, reject) => {
        ffmpeg(videoPath)
          .setStartTime(clip.start)
          .duration(clip.duration)
          .output(outputPath)
          .on('end', () => resolve(outputPath))
          .on('error', reject)
          .run();
      });
    })
  );
}

module.exports = { convertToGIFs };