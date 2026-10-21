const sharp = require('sharp');
const fs = require('fs');

async function processLogo() {
  const { data, info } = await sharp('public/images/logo-raw.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Let's create an RGBA buffer
  const rgba = Buffer.alloc(width * height * 4);

  // Analyze background:
  // The checkerboard pattern typically consists of two neutral grayscale shades:
  // white (around 240-255, 240-255, 240-255) and light gray (around 190-215, 190-215, 190-215)
  // where R, G, B are very close to each other (saturation is nearly 0).
  // The actual logo has vivid Blue (R is low, B is high) and vivid Orange (R is high, G medium, B low).
  // Even the white inside the building tower can be preserved by only flood-filling or detecting distance from outside!
  
  // Let's detect outer background using flood-fill from edges (x=0, y=0, etc.)
  const isVisited = new Uint8Array(width * height);
  const queue = [];

  function isBackgroundPixel(r, g, b) {
    const diffRG = Math.abs(r - g);
    const diffRB = Math.abs(r - b);
    const diffGB = Math.abs(g - b);
    const maxDiff = Math.max(diffRG, diffRB, diffGB);
    // In JPEG, neutral gray/white checkerboard has maxDiff < 20 and min(r,g,b) > 170
    return maxDiff < 22 && r > 165 && g > 165 && b > 165;
  }

  // Push all perimeter pixels that match background
  for (let x = 0; x < width; x++) {
    for (let y of [0, height - 1]) {
      const idx = (y * width + x);
      const pIdx = idx * channels;
      if (isBackgroundPixel(data[pIdx], data[pIdx+1], data[pIdx+2])) {
        isVisited[idx] = 1;
        queue.push(idx);
      }
    }
  }
  for (let y = 0; y < height; y++) {
    for (let x of [0, width - 1]) {
      const idx = (y * width + x);
      const pIdx = idx * channels;
      if (isBackgroundPixel(data[pIdx], data[pIdx+1], data[pIdx+2])) {
        isVisited[idx] = 1;
        queue.push(idx);
      }
    }
  }

  // BFS Flood Fill from edges
  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      cy > 0 ? curr - width : -1,
      cy < height - 1 ? curr + width : -1,
      cx > 0 ? curr - 1 : -1,
      cx < width - 1 ? curr + 1 : -1
    ];

    for (const n of neighbors) {
      if (n !== -1 && !isVisited[n]) {
        const pIdx = n * channels;
        const r = data[pIdx];
        const g = data[pIdx+1];
        const b = data[pIdx+2];
        if (isBackgroundPixel(r, g, b)) {
          isVisited[n] = 1;
          queue.push(n);
        }
      }
    }
  }

  // Also check the inner hole of "Q" and "S"
  // For the inner hole of "Q" and "S", if it's the checkerboard, flood fill there as well
  // Let's identify seeds inside the Q ring and S loop that are background
  // Let's scan for any unvisited background connected component that doesn't touch the building
  // Actually, we can check any pixel where isBackgroundPixel is true:
  // Does the logo have any white/gray elements?
  // Looking at the logo:
  // "Q" has blue gradient ring
  // Inside the Q are building towers: Left is Blue, Middle is Orange/Yellow, Right is Blue
  // The bottom of Q has the orange measuring ruler with dark markings
  // "S" is vibrant orange gradient
  // "QSCalculations" text: "QS" is blue, "Calculations" is orange.
  // NONE of the logo core elements are light gray checkerboard!
  // So any pixel matching checkerboard can be safely made transparent, or feathered.

  console.log('Flood-filled background pixels:', queue.length, 'out of', width * height);

  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;
    const r = data[srcIdx];
    const g = data[srcIdx+1];
    const b = data[srcIdx+2];

    const isBg = isVisited[i] === 1 || isBackgroundPixel(r, g, b);

    if (isBg) {
      rgba[dstIdx] = 0;
      rgba[dstIdx+1] = 0;
      rgba[dstIdx+2] = 0;
      rgba[dstIdx+3] = 0;
    } else {
      rgba[dstIdx] = r;
      rgba[dstIdx+1] = g;
      rgba[dstIdx+2] = b;
      rgba[dstIdx+3] = 255;
    }
  }

  // Smooth edge anti-aliasing
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .toFile('public/images/logo.png');

  // Also create a favicon / square icon 192x192 and 512x512
  await sharp('public/images/logo.png')
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/icon-192.png');

  await sharp('public/images/logo.png')
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon.ico');

  console.log('Successfully generated public/images/logo.png, public/icon-192.png, public/favicon.ico');
}

processLogo().catch(console.error);
