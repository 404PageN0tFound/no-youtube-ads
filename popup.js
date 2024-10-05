document.getElementById('removeAdsBtn').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: openModifiedVideo
    });
  });
});

function openModifiedVideo() {
  var currentURL = window.location.href;
  var videoID = currentURL.split("v=")[1];
  var newURL = "https://youtube.com/embed/" + videoID;
  window.open(newURL);
}