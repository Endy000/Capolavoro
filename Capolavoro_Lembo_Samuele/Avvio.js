const { exec } = require('child_process');

//Esegue il file
exec('start.bat', (error, stdout, stderr) => {
  //controlla gli errori
  if (error) {
    console.error(`Errore: ${error.message}`);
    return;
  }
  //controlla il stderr
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  //stampo del stdout
  console.log(`stdout: ${stdout}`);
});
