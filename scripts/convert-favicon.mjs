import sharp from 'sharp';
import { promises as fs } from 'fs';
import pngToIco from 'png-to-ico';

async function convertFavicon() {
  try {
    // Read the source favicon.jpeg
    const inputBuffer = await fs.readFile('./favicon.jpeg');
    
    // Convert to PNG at multiple sizes
    const sizes = [16, 32, 48];
    const pngBuffers = await Promise.all(
      sizes.map(size => 
        sharp(inputBuffer)
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );
    
    // Convert PNGs to ICO
    const icoBuffer = await pngToIco(pngBuffers);
    
    // Write to the app directory
    await fs.writeFile('./src/app/favicon.ico', icoBuffer);
    
    console.log('Favicon converted and saved successfully with multiple sizes!');
  } catch (error) {
    console.error('Error converting favicon:', error);
  }
}

convertFavicon();
