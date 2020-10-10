const { app, BrowserWindow } = require('electron')
const authModule = require("./modules/auth.js");

//Define ipc
var ipc = require('electron').ipcMain;

function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 840,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('login/login.html')

  win.webContents.openDevTools()

  main();
}

function main(){
  console.log("App Loaded");
  //authModule.login();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipc.on('loginUser', function(event, data){
  console.log(data);
});
