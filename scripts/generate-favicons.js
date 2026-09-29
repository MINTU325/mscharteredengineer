const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function createPNG(size, drawPixel) {
  const width = size;
  const height = size;
  const buffer = Buffer.alloc((width * 4 + 1) * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (width * 4 + 1);
    buffer[rowOffset] = 0;
    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = drawPixel(x, y, width, height);
      buffer[pixelOffset] = r;
      buffer[pixelOffset + 1] = g;
      buffer[pixelOffset + 2] = b;
      buffer[pixelOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(buffer);

  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }

  function crc32(buf) {
    let crc = -1;
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ (-1)) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const body = Buffer.concat([typeBuf, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(body), 0);
    return Buffer.concat([len, body, crc]);
  }

  const header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  return Buffer.concat([
    header,
    makeChunk('IHDR', ihdrData),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

function makeICO(pngBuffers) {
  // Use the 48x48 PNG inside standard ICO header
  const png = pngBuffers[0];
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type: 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // Count: 1 image

  const entry = Buffer.alloc(16);
  entry.writeUInt8(48, 0); // Width
  entry.writeUInt8(48, 1); // Height
  entry.writeUInt8(0, 2);  // Colors
  entry.writeUInt8(0, 3);  // Reserved
  entry.writeUInt16LE(1, 4); // Color planes
  entry.writeUInt16LE(32, 6); // Bits per pixel
  entry.writeUInt32LE(png.length, 8); // Size
  entry.writeUInt32LE(22, 12); // Offset (6 + 16 = 22)

  return Buffer.concat([icoHeader, entry, png]);
}

// Letter rendering bitmaps (5x7 standard font for high crispness at small sizes, scaled proportionally)
// M:
const M_BITMAP = [
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
];
// S:
const S_BITMAP = [
  [0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0],
];

function drawFaviconPixel(x, y, size) {
  const cx = size / 2;
  const cy = size / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const maxR = size / 2 - 1;

  // Background circle
  if (dist > maxR) {
    return [0, 0, 0, 0]; // Transparent outside
  }

  // Outer gear teeth & ring (between 0.78 * maxR and maxR)
  const angle = Math.atan2(dy, dx);
  const numTeeth = 8;
  const toothWave = Math.sin(angle * numTeeth);
  const isOuterGear = dist >= maxR * 0.76 && dist <= maxR;
  if (isOuterGear) {
    if (dist >= maxR * 0.88 && toothWave > 0.3) {
      return [56, 189, 248, 255]; // Cyan gear tooth (#38bdf8)
    }
    if (dist <= maxR * 0.88 && dist >= maxR * 0.76) {
      return [24, 90, 219, 255]; // Royal blue ring (#185adb)
    }
  }

  // Inner border ring
  if (dist >= maxR * 0.72 && dist < maxR * 0.76) {
    return [255, 255, 255, 255]; // White inner separator
  }

  // Main dark navy core
  const isDarkCore = dist < maxR * 0.72;

  // Draw "MS" in the center
  // Center region: size 48 -> text box roughly 24x14
  const scale = (size * 0.42) / 7;
  const mStartX = cx - scale * 5.6;
  const sStartX = cx + scale * 0.6;
  const textStartY = cy - (scale * 7) / 2;

  // Check M
  const mxRel = (x - mStartX) / scale;
  const myRel = (y - textStartY) / scale;
  if (mxRel >= 0 && mxRel < 5 && myRel >= 0 && myRel < 7) {
    const col = Math.floor(mxRel);
    const row = Math.floor(myRel);
    if (M_BITMAP[row] && M_BITMAP[row][col]) {
      return [255, 255, 255, 255]; // Crisp white text
    }
  }

  // Check S
  const sxRel = (x - sStartX) / scale;
  const syRel = (y - textStartY) / scale;
  if (sxRel >= 0 && sxRel < 5 && syRel >= 0 && syRel < 7) {
    const col = Math.floor(sxRel);
    const row = Math.floor(syRel);
    if (S_BITMAP[row] && S_BITMAP[row][col]) {
      return [245, 158, 11, 255]; // Gold text (#f59e0b)
    }
  }

  // Inner navy background gradient
  if (isDarkCore) {
    // Subtle gradient from #0b1736 to #040914
    const ratio = dist / (maxR * 0.72);
    const r = Math.round(11 + (4 - 11) * ratio);
    const g = Math.round(23 + (9 - 23) * ratio);
    const b = Math.round(54 + (20 - 54) * ratio);
    return [r, g, b, 255];
  }

  return [11, 27, 61, 255];
}

const sizes = [48, 96, 192, 180];
const pngs = {};

sizes.forEach(sz => {
  pngs[sz] = createPNG(sz, (x, y) => drawFaviconPixel(x, y, sz));
});

const icoBuf = makeICO([pngs[48]]);

// Targets
const clientPublic = path.join(__dirname, '..', 'client', 'public');
const clientDist = path.join(__dirname, '..', 'client', 'dist');

[clientPublic, clientDist].forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, 'favicon.ico'), icoBuf);
    fs.writeFileSync(path.join(dir, 'favicon-48x48.png'), pngs[48]);
    fs.writeFileSync(path.join(dir, 'favicon-96x96.png'), pngs[96]);
    fs.writeFileSync(path.join(dir, 'favicon-192x192.png'), pngs[192]);
    fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), pngs[180]);
    console.log(`Saved favicons to ${dir}`);
  }
});
