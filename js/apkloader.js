function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");		
    xobj.open('GET', 'apk/swehelp-apps.json', true);
	xobj.setRequestHeader('Cache-Control', 'no-cache');
	xobj.setRequestHeader('Cache-Control', 'max-age=3600');	
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
              callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 
 function init() {
 loadJSON(function(response) {
    var actual_JSON = JSON.parse(response);
	var s = "<ul>";
	actual_JSON["apps"].forEach(function(item, i, arr) {
	var name = "";
	if (item["isActual"] == 1) {
		name = "Актуальная версия - ";
	} else {
		name = "Бета версия - ";
	}
	s = s +"<li><p><a href=\"" + item["downloadPath"] +"\">" 
	+ name + item["appNameWeb"]
	+ "</a></p></li>"
	});	
	s = s + "</ul>"
	document.getElementById("apk-list").innerHTML = s;
 });
};