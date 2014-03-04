// background.js
(function() {
    if(!localStorage.scroll) {
        localStorage.scroll = "on";
    }
})();

function getMessages(request, sender, callback) {
   if (request.action == "checked") {
      callback(localStorage.scroll);
   }else if(request.action = "setting") {
      localStorage.scroll = request.value;
   }
}
   
chrome.extension.onRequest.addListener(getMessages);



