const fs = require('fs');
const path = require('path');

// Paths to files that need patching
const filesToPatch = [
  'node_modules/next/dist/server/lib/start-server.js',
  'node_modules/next/dist/esm/server/lib/start-server.js'
];

filesToPatch.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the memory watcher check
    content = content.replace(
      /if\s*\(process\.env\.__NEXT_DISABLE_MEMORY_WATCHER\)\s*{[\s\S]*?return;?\s*}/g,
      ''
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Patched ${filePath}`);
  }
});
