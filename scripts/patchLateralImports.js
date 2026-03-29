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

walk(srcDir, function(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let original = fs.readFileSync(filePath, 'utf-8');
    let content = original;

    // Fix lateral links missed (e.g., from '../layout/Container')
    content = content.replace(/['"](?:\.\.\/)+layout\/([^'"]+)['"]/g, "'@presentation/components/layout/$1'");
    content = content.replace(/['"](?:\.\.\/)+common\/([^'"]+)['"]/g, "'@presentation/components/common/$1'");
    content = content.replace(/['"](?:\.\.\/)+sections\/([^'"]+)['"]/g, "'@presentation/components/sections/$1'");

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Patched lateral import in: ${filePath}`);
    }
  }
});
