<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Browser - Updated</title>
  <style>
    body, html {
      margin: 0; padding: 0; height: 100%;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    #top-bar {
      display: flex;
      padding: 10px;
      background-color: #24292e;
      color: white;
      align-items: center;
      gap: 10px;
    }
    #url-input {
      flex: 1;
      padding: 8px;
      border-radius: 5px;
      border: none;
      font-size: 16px;
    }
    #go-btn {
      padding: 8px 16px;
      background-color: #2ea44f;
      border: none;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    #go-btn:hover {
      background-color: #22863a;
    }
    #container {
      display: flex;
      flex: 1;
      height: calc(100% - 52px);
      background: #f6f8fa;
    }
    #browser-pane {
      flex: 2;
      border-right: 1px solid #ddd;
    }
    #ai-pane {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 15px;
      background-color: #fff;
      box-shadow: -3px 0 5px -2px rgba(0,0,0,0.1);
    }
    #chat-log {
      flex: 1;
      overflow-y: auto;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 6px;
      background: #fafafa;
      font-size: 14px;
      line-height: 1.4;
    }
    .chat-message {
      margin-bottom: 10px;
      padding: 8px;
      border-radius: 8px;
      max-width: 90%;
      word-wrap: break-word;
    }
    .user-msg {
      background-color: #2ea44f;
      color: white;
      align-self: flex-end;
    }
    .ai-msg {
      background-color: #e1e4e8;
      color: #24292e;
      align-self: flex-start;
    }
    #input-area {
      display: flex;
      gap: 10px;
    }
    #ai-input {
      flex: 1;
      padding: 10px;
      font-size: 16px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    #send-btn {
      background-color: #0366d6;
      border: none;
      border-radius: 6px;
      color: white;
      font-weight: bold;
      padding: 0 20px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    #send-btn:hover {
      background-color: #0356b6;
    }
  </style>
</head>
<body>
  <div id="top-bar">
    <input id="url-input" type="text" placeholder="Enter URL here, e.g. https://example.com" />
    <button id="go-btn">Go</button>
  </div>
  <div id="container">
    <div id="browser-pane">
      <webview id="webview" src="https://www.google.com" style="width:100%; height:100%;"></webview>
    </div>
    <div id="ai-pane">
      <div id="chat-log"></div>
      <div id="input-area">
        <input id="ai-input" type="text" placeholder="Ask AI something..." />
        <button id="send-btn">Send</button>
      </div>
    </div>
  </div>

  <script>
    const goBtn = document.getElementById('go-btn');
    const urlInput = document.getElementById('url-input');
    const webview = document.getElementById('webview');

    goBtn.addEventListener('click', () => {
      let url = urlInput.value.trim();
      if (!url) return;
      if (!url.startsWith('http')) {
        url = 'https://' + url;
      }
      webview.src = url;
    });

    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') goBtn.click();
    });

    // AI chat
    const chatLog = document.getElementById('chat-log');
    const aiInput = document.getElementById('ai-input');
    const sendBtn = document.getElementById('send-btn');

    function appendMessage(text, sender) {
      const div = document.createElement('div');
      div.classList.add('chat-message');
      div.classList.add(sender === 'user' ? 'user-msg' : 'ai-msg');
      div.textContent = text;
      chatLog.appendChild(div);
      chatLog.scrollTop = chatLog.scrollHeight;
    }

    sendBtn.addEventListener('click', async () => {
      const question = aiInput.value.trim();
      if (!question) return;
      appendMessage(question, 'user');
      aiInput.value = '';
      appendMessage('Thinking...', 'ai');
      try {
        const answer = await window.api.askAI(question);
        chatLog.lastChild.textContent = answer;
      } catch (err) {
        chatLog.lastChild.textContent = 'Error getting AI response.';
      }
    });

    aiInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendBtn.click();
    });
  </script>
</body>
</html>
