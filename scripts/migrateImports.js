import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const importMappings = [
  { regex: /['"](?:(?:\.\.\/)+|(?:\.\/)+)?components\/([^'"]+)['"]/g, replace: "'@presentation/components/$1'" },
  { regex: /['"](?:(?:\.\.\/)+|(?:\.\/)+)?pages\/([^'"]+)['"]/g, replace: "'@presentation/screens/$1'" },
  { regex: /['"](?:(?:\.\.\/)+|(?:\.\/)+)?data\/([^'"]+)['"]/g, replace: "'@data/$1'" },
  { regex: /['"](?:(?:\.\.\/)+|(?:\.\/)+)?utils\/([^'"]+)['"]/g, replace: "'@core/utils/$1'" },
  { regex: /['"](?:(?:\.\.\/)+|(?:\.\/)+)?hooks\/([^'"]+)['"]/g, replace: "'@domain/hooks/$1'" },
  { regex: /['"](?:(?:\.\.\/)+|(?:\.\/)+)?config\/([^'"]+)['"]/g, replace: "'@core/config/$1'" },
  { regex: /['"](?:(?:\.\.\/)+|(?:\.\/)+)?assets\/([^'"]+)['"]/g, replace: "'@presentation/assets/$1'" },
  { regex: /['"](?:\.\/)*App['"]/g, replace: "'@presentation/navigation/AppRouter'" }
];

walk(srcDir, function(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let originalFormat = fs.readFileSync(filePath, 'utf-8');
    let content = originalFormat;

    // Apply strict import path mappings to absolute aliases
    importMappings.forEach(mapping => {
        content = content.replace(mapping.regex, mapping.replace);
    });

    // Rename Platform to DTwinOS
    content = content.replace(/\bPlatform\b/g, 'DTwinOS');
    content = content.replace(/\/platform\b/g, '/dtwinos');
    content = content.replace(/PlatformDetail/g, 'DTwinOSDetail');
    content = content.replace(/platformData/g, 'dtwinosData');

    if (content !== originalFormat) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Rewrote imports + Platform in: ${filePath}`);
    }
  }
});

console.log('Finished updating internal file imports and renaming logic to DTwinOS.');
