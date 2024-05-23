// contentScript.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'scrap') {
      const listItems = document.querySelectorAll('li.ember-view');
      const scrapedData = [];
      listItems.forEach(item => {
        scrapedData.push(item.textContent.trim());
      });
      sendResponse(scrapedData);
    }
  });
  