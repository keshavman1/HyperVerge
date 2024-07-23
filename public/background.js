chrome.runtime.onInstalled.addListener(() => {
    console.log('Chrome extension installed');
  });
  chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
});

// Optional: If you want it to open every time Chrome starts, not just on installation
chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
});
