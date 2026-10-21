import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function processImages() {
  const userImg1 = 'C:/Users/NB LAPTOP/.gemini/antigravity/brain/f2ce0adb-a950-435d-b331-7badf7e7c8a6/.user_uploaded/media_1792605164141_8d0e4516.jpg';
  const userImg2 = 'C:/Users/NB LAPTOP/.gemini/antigravity/brain/f2ce0adb-a950-435d-b331-7badf7e7c8a6/.user_uploaded/media_1792605160508_134a02bb.jpg';
  const logoPath = 'd:/APPs/qscalculations.com/public/images/logo.png';
  const outImagesDir = 'd:/APPs/qscalculations.com/public/images';
  const appDir = 'd:/APPs/qscalculations.com/app';
  const publicDir = 'd:/APPs/qscalculations.com/public';

  // 1. Process userImg1 (banner group)
  await sharp(userImg1).jpeg({ quality: 92 }).toFile(path.join(outImagesDir, 'qs-banner-group.jpg'));
  console.log('Processed qs-banner-group.jpg');

  // 2. Process userImg2 (student online mentorship)
  await sharp(userImg2).jpeg({ quality: 92 }).toFile(path.join(outImagesDir, 'online-student-mentorship.jpg'));
  console.log('Processed online-student-mentorship.jpg');

  // 3. Generate icons from logo.png
  const icon32 = await sharp(logoPath).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icon32);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icon32);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), icon32);

  // 192x192 icon
  await sharp(logoPath).resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(publicDir, 'icon-192.png'));
  await sharp(logoPath).resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(appDir, 'icon.png'));

  // 512x512 icon
  await sharp(logoPath).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(publicDir, 'icon-512.png'));
  console.log('Generated favicons and icons');

  // 4. Generate OG Social Share Banner (1200x630)
  const logoResized = await sharp(logoPath).resize(280, 280, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  
  const svgOverlay = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#0B1F3A" />
      <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#FF8A00" stroke-width="4" rx="20" opacity="0.6" />
      <text x="600" y="380" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Cost &amp; Calculation's</text>
      <text x="600" y="430" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600" fill="#FF8A00" text-anchor="middle">ONLINE QUANTITY SURVEYING &amp; COST ESTIMATION COURSE</text>
      <text x="600" y="480" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#CBD5E1" text-anchor="middle">Practical BOQ Preparation • Rate Analysis • EVM • Tender Bidding</text>
      <text x="600" y="540" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="#25D366" text-anchor="middle">WhatsApp: 0307-2963487 • QSCalculations.com</text>
    </svg>
  `);

  await sharp(svgOverlay)
    .composite([{ input: logoResized, top: 40, left: 460 }])
    .jpeg({ quality: 95 })
    .toFile(path.join(outImagesDir, 'og-share-banner.jpg'));

  console.log('Generated og-share-banner.jpg');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
