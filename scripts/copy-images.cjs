const fs = require('fs');
const path = require('path');
const https = require('https');

const sourceDir = 'C:\\Users\\anilk\\.gemini\\antigravity\\brain\\ac695a76-f685-4b6c-a33d-5470b0bd153e';
const targetDir = path.join('d:', 'Projects', 'company-website', 'public', 'images', 'why-us');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);

const mapping = {
  'end_to_end_expertise': 'end-to-end-expertise.png',
  'power_of_dtwinos': 'power-of-dtwinos.png',
  'proven_impact': 'proven-impact.png',
  'domain_knowledge': 'domain-knowledge.png',
  'hidden_asset_value': 'hidden-asset-value.png',
  'vendor_agnostic': 'vendor-agnostic.png',
  'actionable_ai': 'actionable-ai.png',
  'scalability': 'scalability.png',
  'sustainability_commitment': 'sustainability-commitment.png',
  'global_ecosystem': 'global-ecosystem.png',
  'rapid_deployment': 'rapid-deployment.png',
  'future_proof': 'future-proof.png',
  'security_privacy': 'security-privacy.png',
  'workforce_upskilling': 'workforce-upskilling.png',
  'data_standardization': 'data-standardization.png',
  'physical_digital_divide': 'physical-digital-divide.png',
  'custom_engineering': 'custom-engineering.png'
};

files.forEach(file => {
  for (const [prefix, targetName] of Object.entries(mapping)) {
    if (file.startsWith(prefix) && file.endsWith('.png')) {
      const sourceFile = path.join(sourceDir, file);
      const targetFile = path.join(targetDir, targetName);
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`Copied ${file} to ${targetName}`);
    }
  }
});

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const missing = [
  { name: 'customer-success.png', seed: 'handshake' },
  { name: 'connected-future.png', seed: 'city' }
];

Promise.all(missing.map(m => {
  const dest = path.join(targetDir, m.name);
  console.log(`Downloading placeholder for ${m.name}...`);
  return downloadFile(`https://picsum.photos/seed/${m.seed}/800/600`, dest);
})).then(() => {
  console.log('All done!');
}).catch(console.error);
