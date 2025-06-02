const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  askAI: (question) => ipcRenderer.invoke('ask-ai', question)
});
