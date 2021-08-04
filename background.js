chrome.runtime.onMessage.addListener((req, sender) => {
  if (sender.tab && req.vueDetected) {
    chrome.browserAction.setIcon({
      tabId: sender.tab.id,
      path: {
        16: `icons/16.png`,
        48: `icons/48.png`,
        128: `icons/128.png`,
      },
    });
    chrome.browserAction.setPopup({
      tabId: sender.tab.id,
      popup: `popups/enabled.html`,
    });
  }
});
