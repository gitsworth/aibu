const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const axios = require('axios');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Handle AI query from renderer process
ipcMain.handle('ask-ai', async (event, question) => {
  try {
    // Example for local Ollama API (adjust URL as needed)
    // This example assumes Ollama API listens locally on port 11434
    // and accepts a POST with { prompt: question }
    const response = await axios.post('http://localhost:11434/ask', {
      prompt: question
    });

    return response.data.answer || 'No answer from AI';
  } catch (error) {
    console.error('AI request failed:', error.message);
    return `Error: ${error.message}`;
  }
});
