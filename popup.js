function settings() {
    var v;
    if(document.getElementById("scroll").checked) {
        v = "on"
    }else {
        v = "off"
    }
    chrome.extension.sendRequest({action: "setting", "value": v}, function(){});
}
(function() {
    chrome.extension.sendRequest({action: "checked"}, function(c) {
       if(c == "on") {
          document.getElementById("scroll").checked = true;
          console.log("on");
       }else {
          document.getElementById("scroll").checked = false;
          console.log("off");
       }
    });
})();

document.getElementById("scroll").addEventListener("click", settings, false);