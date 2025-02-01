import sharp from 'sharp';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const backgroundColor = '#FFFFFF';

async function generateIcons() {
  try {
    // Read the SVG file
    const svgPath = path.join(projectRoot, 'public', 'images', 'reformlogo.svg');
    const svgBuffer = await readFile(svgPath);
    
    // Generate icons for each size
    await Promise.all(sizes.map(async (size) => {
      const outputPath = path.join(projectRoot, 'public', 'icons', `icon-${size}x${size}.png`);
      
      await sharp(svgBuffer)
        .resize(size, size)
        .extend({
          top: 4,
          bottom: 4,
          left: 4,
          right: 4,
          background: backgroundColor
        })
        .png()
        .toFile(outputPath);
      
      console.log(`Generated ${size}x${size} icon at ${outputPath}`);
    }));

    // Generate apple-touch-icon
    const appleTouchIconPath = path.join(projectRoot, 'public', 'apple-touch-icon.png');
    await sharp(svgBuffer)
      .resize(180, 180)
      .extend({
        top: 4,
        bottom: 4,
        left: 4,
        right: 4,
        background: backgroundColor
      })
      .png()
      .toFile(appleTouchIconPath);
    
    console.log(`Generated apple-touch-icon.png at ${appleTouchIconPath}`);

    // Generate favicon.png
    const faviconPath = path.join(projectRoot, 'public', 'favicon.png');
    await sharp(svgBuffer)
      .resize(32, 32)
      .extend({
        top: 2,
        bottom: 2,
        left: 2,
        right: 2,
        background: backgroundColor
      })
      .png()
      .toFile(faviconPath);

    console.log(`Generated favicon.png at ${faviconPath}`);
    console.log('All icons generated successfully!');

  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
