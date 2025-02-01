const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Increase memory limit
process.env.NODE_OPTIONS = '--max-old-space-size=4096';

// Custom file pattern matching function to avoid using micromatch
function matchFiles(dir, pattern) {
  const results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results.push(...matchFiles(fullPath, pattern));
    } else if (pattern.test(file)) {
      results.push(fullPath);
    }
  }
  
  return results;
}

try {
  console.log('Starting custom build process...');
  
  // Clean previous build
  console.log('Cleaning previous build...');
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }
  
  // Run the build
  console.log('Building Next.js application...');
  execSync('next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: '1',
      NODE_ENV: 'production',
      // Disable features that might trigger micromatch
      NEXT_MEMORY_WATCHER: 'true',
      NEXT_TELEMETRY_CONTROL: 'true'
    }
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
