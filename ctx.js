sc = {"l": "meshi_loader"};
sc.rep;
sc.x = 0; sc.y = 0; sc.nx = 0; sc.ny = 0; sc.SCL = 0; sc.stop_sec = 0;
/* ウィンドウの自動スクロール */
sc.pageScroll = function() {
 sc.SCL = 1;
 var tim = 10;
 var move = 1;
	window.scrollBy(0, move);
	sc.rep = setTimeout(sc.pageScroll, tim);
	sc.x = pageXOffset;
	sc.y = pageYOffset;
	if(sc.nx == sc.x && sc.ny == sc.y){
    console.log("止まってる");
    if(sc.stop_sec > 200) {
       /* 2秒間止まったまま */
       console.log("止めます");
       sc.pageScrollStop();
    }else {
       sc.stop_sec++;
    }
	}else {
		  sc.nx = sc.x;
		  sc.ny = sc.y;
	}
};
sc.pageScrollStop = function() {
    sc.SCL = 0;
    clearTimeout(sc.rep);
};
sc.main = function(c) {
 if(c == "on") {
  clearTimeout(sc.rep);
  sc.SCL = 0;
  sc.stop_sec = 0;
  if(sc.SCL == 0) {
     sc.pageScroll();
  }
 }
};

sc.c = function() {
   chrome.extension.sendRequest({action: "checked"}, sc.main);
}
document.getElementsByClassName(sc.l)[0].addEventListener("click", sc.c, false);
