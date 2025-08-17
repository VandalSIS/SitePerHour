import https from 'https';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const url = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json';
const fontPath = path.join(__dirname, 'public', 'fonts', 'helvetiker_regular.typeface.json');

https.get(url, (response) => {
  const fileStream = fs.createWriteStream(fontPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Font file downloaded successfully!');
  });
}).on('error', (err) => {
  console.error('Error downloading font:', err.message);
}); 