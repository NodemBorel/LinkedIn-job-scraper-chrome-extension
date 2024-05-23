chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.startsWith('https://www.linkedin.com/jobs/search/?currentJobId=3850037379&keywords=web%20developer&origin=JOBS_HOME_SEARCH_BUTTON&refresh=true')) {
      chrome.action.setBadgeText({ text: "ON", tabId: tab.id });
    } else {
      chrome.action.setBadgeText({ text: "", tabId: tab.id });
    }
  });
  