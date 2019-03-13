const {ipcRenderer} = require('electron')

document.querySelector('button').addEventListener('click', () => {
  ipcRenderer.send('open-devtools');
});

console.log('devtools.js');
