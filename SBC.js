var port = 1234;
var dstIP = "192.168.0.100";

var socket;
var count = 0;

var HTML_top = '<HTML>\
  <HEAD>\
    <TITLE>Quản lý bãi đỗ xe thông minh</TITLE>\
    <STYLE>\
        #container{\
          width:100%;\
          background-color: black;\
        }\
        #header{\
          width:100%;\
          background-color: black;\
          color: #999999;\
        }\
        #data{\
          color: #333333;\
        }\
        #p1{\
          width:100%;\
          background-color: green;\
        }\
        #p2{\
          width:100%;\
          background-color: green;\
        }\
        #p3{\
          width:100%;\
          background-color: green;\
        }\
        #p4{\
          width:100%;\
          background-color: green;\
        }\
        #p5{\
          width:100%;\
          background-color: green;\
        }\
    </STYLE>\
    <SCRIPT>\
        function init() {\
           setTimeout(reloadPage, 1000);\
        }\
        function reloadPage() {\
           window.location.reload(true);\
        }\
    </SCRIPT>\
  </HEAD>\
  <BODY onload="init();" bgcolor="#000000">\
  	<DIV ID="container">\
           <DIV ID="header"><h1>Quản lý bãi đỗ xe thông minh</h1></DIV>\
           <DIV ID="data">';
var HTML_bottom = "</DIV></DIV></DIV></BODY></HTML>";

function setup() {
	socket = new UDPSocket();
	
	// when receiving data
	socket.onReceive = function(ip, port, data) {
		Serial.println("received from "
			+ ip + ":" + port + ": \n\t" + data);
	};
	
	// start UDP socket on port
	Serial.println(socket.begin(port));
	
	Serial.println(HTTPServer.start(80));
	
}


function loop() {
	var p1 = digitalRead(0);
	var p2 = digitalRead(1);
	var p3 = digitalRead(2);
	var p4 = digitalRead(3);
	var p5 = digitalRead(4);
	console.log(p1);
	console.log(p2);
	console.log(p3);
	console.log(p4);
	console.log(p5);
	updateHTML(p1,p2,p3,p4,p5);
	delay(5000);
	
	
	/*
	// send one msg every sec
	socket.send(dstIP, port, "hello " + (count++));
	*/
	/*
	add_event_detect(A0, detect)
	while True:
		delay(1000)

	*/
}
function updateHTML(p1,p2,p3,p4,p5) {
	var p1_div="";
	var p2_div="";
	var p3_div="";
	var p4_div="";
	var p5_div="";
	if (p1 > 0) {
		p1_div = '<div id="p1"><p style="background-color:#ff0000;">Điểm để xe số 1 đã được sử dụng</p></div>';
	} else p1_div = '<div id="p1"><p style="background-color:#00ff00;">Điểm để xe số 1 đang có sẵn</p></div>';
	if (p2 > 0) {
		p2_div = '<div id="p2"><p style="background-color:#ff0000;">Điểm để xe số 2 đã được sử dụng</p></div>';
	} else p2_div = '<div id="p2"><p style="background-color:#00ff00;">Điểm để xe số 2 đang có sẵn</p></div>';
	if (p3 > 0) {
		p3_div = '<div id="p3"><p style="background-color:#ff0000;">Điểm để xe số 3 đã được sử dụng</p></div>';
	} else p3_div = '<div id="p3"><p style="background-color:#00ff00;">Điểm để xe số 3 đang có sẵn</p></div>';
	if (p4 > 0) {
		p4_div = '<div id="p4"><p style="background-color:#ff0000;">Điểm để xe số 4 đã được sử dụng</p></div>';
	} else p4_div = '<div id="p4"><p style="background-color:#00ff00;">Điểm để xe số 4 đang có sẵn</p></div>';
	if (p5 > 0) {
		p5_div = '<div id="p4"><p style="background-color:#ff0000;">Điểm để xe số 5 đã được sử dụng</p></div>';
	} else p5_div = '<div id="p4"><p style="background-color:#00ff00;">Điểm để xe số 5 đang có sẵn</p></div>';
	var HTMLDoc = HTML_top + p1_div + p2_div + p3_div + p4_div + p5_div + HTML_bottom;
	console.log("HTMLDoc created.");
	//console.log(HTMLDoc);
	
	HTTPServer.route("/*", function(url, response) { 
		response.send(HTMLDoc); 
	});
}
