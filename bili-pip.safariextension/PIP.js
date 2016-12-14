
var pip_scr = document.createElement('script');
pip_scr.type = "text/javascript";
pip_scr.innerHTML = '\
	var interval_id = setInterval(enablePIP, 1000); \
    function enablePIP(){\
	    var player = document.getElementsByTagName("video")[0];\
	    if (player){\
	    	console.log("player tag is found");\
	    	player.setAttribute("controls", "controls");\
	    	clearInterval (interval_id);\
	    }\
	}';

document.body.appendChild(pip_scr);

