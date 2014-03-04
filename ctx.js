sc = {"l": "meshi_loader"};
sc.rep;
sc.x = 0;
sc.y = 0;
sc.last_x = 0;
sc.last_y = 0;
sc.stop_sec = 0;
/* ウィンドウの自動スクロール */
sc.pageScroll = function() {
    var time_ms = 10;
    var move_px = 1;
    window.scrollBy(0, move_px);
    sc.rep = setTimeout(sc.pageScroll, time_ms);
    sc.x = pageXOffset;
    sc.y = pageYOffset;
    if (sc.last_x == sc.x && sc.last_y == sc.y) {
        //console.log("止まってる");
        if (sc.stop_sec > 200) {
            /* 2秒間止まったまま */
            //console.log("止めます");
            sc.pageScrollStop();
        } else {
            sc.stop_sec++;
        }
    } else {
        sc.last_x = sc.x;
        sc.last_y = sc.y;
    }
};
sc.pageScrollStop = function() {
    clearTimeout(sc.rep);
};
sc.main = function(c) {
    if (c == "on") {
        clearTimeout(sc.rep);
        sc.stop_sec = 0;
        sc.pageScroll();
    }
};

sc.c = function() {
    chrome.extension.sendRequest({action: "checked"}, sc.main);
}
document.getElementsByClassName(sc.l)[0].addEventListener("click", sc.c, false);
