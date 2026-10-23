import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function processNewLogoAndAssets() {
  const newLogoUpload = 'C:/Users/NB LAPTOP/.gemini/antigravity/brain/f2ce0adb-a950-435d-b331-7badf7e7c8a6/.user_uploaded/media_1792754122015_ca3abcd4.png';
  const outImagesDir = 'd:/APPs/qscalculations.com/public/images';
  const appDir = 'd:/APPs/qscalculations.com/app';
  const publicDir = 'd:/APPs/qscalculations.com/public';
  const finalLogoPath = path.join(outImagesDir, 'logo.png');

  // 1. Trim and save new logo.png with full transparency
  const trimmedLogoBuffer = await sharp(newLogoUpload)
    .trim()
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync(finalLogoPath, trimmedLogoBuffer);
  console.log('Saved new logo.png successfully.');

  // 2. Generate 32x32 favicon
  const icon32 = await sharp(finalLogoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icon32);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icon32);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), icon32);
  console.log('Generated 32x32 favicons.');

  // 3. Generate 192x192 icon
  await sharp(finalLogoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));

  await sharp(finalLogoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, 'icon.png'));
  console.log('Generated 192x192 icons.');

  // 4. Generate 512x512 icon
  await sharp(finalLogoPath)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('Generated 512x512 icon.');

  // 5. Generate OpenGraph Social Share Banner (1200x630) with new logo
  const logoForOg = await sharp(finalLogoPath)
    .resize(300, 300, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#0B1F3A" />
      <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#FF8A00" stroke-width="4" rx="20" opacity="0.6" />
      <text x="600" y="390" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Cost &amp; Calculation's</text>
      <text x="600" y="440" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="#FF8A00" text-anchor="middle">QUANTITY SURVEYING &amp; COST ESTIMATION</text>
      <text x="600" y="485" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="600" fill="#38BDF8" text-anchor="middle">Training &amp; Consultancy • Practical BOQ • EVM • Tender Analysis</text>
      <text x="600" y="545" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="#25D366" text-anchor="middle">WhatsApp: 0307-2963487 • QSCalculations.com</text>
    </svg>
  `);

  await sharp(svgOverlay)
    .composite([{ input: logoForOg, top: 40, left: 450 }])
    .jpeg({ quality: 95 })
    .toFile(path.join(outImagesDir, 'og-share-banner.jpg'));

  console.log('Generated new og-share-banner.jpg.');
}

processNewLogoAndAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
