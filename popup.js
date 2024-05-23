document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('actionButton');
    const outputList = document.getElementById('outputList');
  
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      if (currentTab.url.startsWith('https://www.linkedin.com/jobs/search/?currentJobId=3850037379&keywords=web%20developer&origin=JOBS_HOME_SEARCH_BUTTON&refresh=true')) {
        button.innerText = "Scrap";
        button.classList.add('blue');
        button.addEventListener('click', function() {
          chrome.tabs.sendMessage(currentTab.id, { action: "scrap" }, (response) => {
            displayScrapedData(response);
          });
        });
      } else {
        button.innerText = "Redirect to LinkedIn Jobs";
        button.classList.add('gray');
        button.addEventListener('click', function() {
          chrome.tabs.update({ url: 'https://www.linkedin.com/jobs/search/?currentJobId=3850037379&keywords=web%20developer&origin=JOBS_HOME_SEARCH_BUTTON&refresh=true' });
        });
      }
    });
  
    function displayScrapedData(data) {
      outputList.innerHTML = ""; // Clear previous data
      data.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${item}`;
        outputList.appendChild(listItem);
      });
    }
  });
  