const https = require('https');

const ids = ['7947452', '36418628', '36418632'];
const resolutions = [
  'hd_1920_1080_25fps',
  'hd_1920_1080_30fps',
  'uhd_3840_2160_25fps',
  'uhd_3840_2160_30fps',
  'sd_640_360_25fps',
  'sd_640_360_30fps',
  'hd_1280_720_50fps',
  'uhd_2160_3840_25fps'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200 || res.statusCode === 206) {
        resolve(true);
      } else {
        resolve(false);
      }
      res.resume(); // consume response data to free up memory
    }).on('error', () => resolve(false));
  });
}

async function run() {
  for (const id of ids) {
    let found = false;
    for (const res of resolutions) {
      const url = `https://videos.pexels.com/video-files/${id}/${id}-${res}.mp4`;
      const exists = await checkUrl(url);
      if (exists) {
        console.log(`FOUND: ${url}`);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(`NOT FOUND for ${id}`);
    }
  }
}

run();
