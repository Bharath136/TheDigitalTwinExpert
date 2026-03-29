import { exec } from 'child_process';
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
  }
  console.log(`STDOUT: ${stdout}`);
  console.log(`STDERR: ${stderr}`);
});
