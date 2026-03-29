import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, '../src');

const dirs = [
  'core/utils',
  'core/config',
  'domain/hooks',
  'presentation/components/common',
  'presentation/components/layout',
  'presentation/components/sections',
  'presentation/screens',
  'presentation/navigation',
  'presentation/themes',
  'presentation/assets'
];

dirs.forEach(d => fs.mkdirSync(path.join(src, d), { recursive: true }));

function moveFolderContents(oldPath, newPath) {
  if (fs.existsSync(oldPath)) {
    fs.readdirSync(oldPath).forEach(file => {
      const srcFile = path.join(oldPath, file);
      if (fs.statSync(srcFile).isFile()) {
        fs.renameSync(srcFile, path.join(newPath, file));
        console.log(`Moved: ${file}`);
      }
    });
  }
}

moveFolderContents(path.join(src, 'components/common'), path.join(src, 'presentation/components/common'));
moveFolderContents(path.join(src, 'components/layout'), path.join(src, 'presentation/components/layout'));
moveFolderContents(path.join(src, 'components/sections'), path.join(src, 'presentation/components/sections'));
moveFolderContents(path.join(src, 'pages'), path.join(src, 'presentation/screens'));
moveFolderContents(path.join(src, 'utils'), path.join(src, 'core/utils'));
moveFolderContents(path.join(src, 'config'), path.join(src, 'core/config'));
moveFolderContents(path.join(src, 'hooks'), path.join(src, 'domain/hooks'));
moveFolderContents(path.join(src, 'assets'), path.join(src, 'presentation/assets'));

if (fs.existsSync(path.join(src, 'App.jsx'))) {
  fs.renameSync(path.join(src, 'App.jsx'), path.join(src, 'presentation/navigation/AppRouter.jsx'));
}
if (fs.existsSync(path.join(src, 'index.css'))) {
  fs.renameSync(path.join(src, 'index.css'), path.join(src, 'presentation/themes/index.css'));
}

const screens = path.join(src, 'presentation/screens');
if (fs.existsSync(path.join(screens, 'Platform.jsx'))) {
  fs.renameSync(path.join(screens, 'Platform.jsx'), path.join(screens, 'DTwinOS.jsx'));
  console.log('Renamed Platform.jsx -> DTwinOS.jsx');
}
if (fs.existsSync(path.join(screens, 'PlatformDetail.jsx'))) {
  fs.renameSync(path.join(screens, 'PlatformDetail.jsx'), path.join(screens, 'DTwinOSDetail.jsx'));
  console.log('Renamed PlatformDetail.jsx -> DTwinOSDetail.jsx');
}

// Cleanup empty old folders
['components/common', 'components/layout', 'components/sections', 'components', 'pages', 'utils', 'config', 'hooks', 'assets'].forEach(oldDir => {
  const oldPath = path.join(src, oldDir);
  if (fs.existsSync(oldPath)) {
    try {
      if (fs.readdirSync(oldPath).length === 0) {
        fs.rmdirSync(oldPath);
      }
    } catch(e) {}
  }
});
console.log('Migration complete.');
