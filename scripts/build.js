const { execSync } = require('child_process');
const path = require('path');

// Increase Node.js memory limit
process.env.NODE_OPTIONS = '--max-old-space-size=4096';

try {
  console.log('Starting build process...');
  
  // Clean previous build
  console.log('Cleaning previous build...');
  execSync('rm -rf .next', { stdio: 'inherit' });
  
  // Run TypeScript compilation first
  console.log('Running TypeScript compilation...');
  execSync('tsc --noEmit', { stdio: 'inherit' });
  
  // Run the Next.js build in chunks
  console.log('Building Next.js application...');
  execSync('next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: '1',
      NODE_ENV: 'production'
    }
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
