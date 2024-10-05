// This file will be injected into the YouTube page
function openModifiedVideo() {
    var currentURL = window.location.href;
    var videoID = currentURL.split("v=")[1];
    var newURL = "https://youtube.com/embed/" + videoID;
    window.open(newURL);
  }