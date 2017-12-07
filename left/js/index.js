/*global $ */
/*jslint browser: true*/

//$(document).ready(function() {
//	document.getElementById('You3').style.visibility = "hidden";
//});

var i = 0;
var url = "https://sheetsu.com/apis/v1.0su/2e93602a2b09";
var sheetsuStr = "sheetsu-search= '{"id":";

function scrollDown() {
  var focusBottom = document.getElementById("first");
  focusBottom.scrollTop = focusBottom.scrollHeight;
}

function nxtConvo(){
			i=i+1;
			var sheetsu = document.getElementById("first");	sheetsu.attributes.setNamedItem('{"id":"' + i + '"}');
}

document.getElementById("first").setAttribute("sheetsu", window.url + window.sheetsuStr + i + "}'" );
	
$("input").keypress(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    $('form.chat input[type="submit"]').click();
  }
});

$('form.chat input[type="submit"]').click(function(event) {
  event.preventDefault();
  var message = $('form.chat input[type="text"]').val();
  if ($('form.chat input[type="text"]').val()) {
//    var d = new Date();
//    var clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//    var month = d.getMonth() + 1;
//    var day = d.getDate();
//    var currentDate =
//      (('' + day).length < 2 ? '0' : '') + day + '.' +
//      (('' + month).length < 2 ? '0' : '') + month + '.' +
//      d.getFullYear() + '&nbsp;&nbsp;' + clock;
		
    $('form.chat div.messages').append('<div class="message"><div class="myMessage"><p>' + message + '</p></div></div>');
    setTimeout(function() {
      $('form.chat > span').addClass('spinner');
    }, 100);
    setTimeout(function() {
      $('form.chat > span').removeClass('spinner');
			nxtConvo();
    }, 2000);
  }

$('form.chat input[type="text"]').val('');
  scrollDown();
});

//var leftonread;
//var i = 0;

//$.ajax({
//    url: url,
//    dataType: 'json',
//    success: function( data )
//    {
//        var i = data.i;
//
//        $('#You1').text( i.You1 );
//        $('#Me1').text( i.Me1 );
//				$('#You2').text( i.You2 );
//        $('#Me2').text( i.Me2 );
//				$('#You3').text( i.You3 );
//        $('#iRead').text( i.iRead );
//    }
//});

//$.getJSON("https://sheetsu.com/apis/v1.0su/2e93602a2b09", function(data), success {
//  leftonread = data;
//});
//
//var you1 = document.getElementById('You1'),
//    me1 = document.getElementById('Me1'),
//    you2 = document.getElementById('You2'),
//		me2 = document.getElementById('Me2'),
//		you3 = document.getElementById('You3'),
//		iread = document.getElementById('iRead');
//
//you1.innerHTML = leftonread[i].You1;
//me1.innerHTML = leftonread[i].Me1;
//you2.innerHTML = leftonread[i].You1;
//me2.innerHTML = leftonread[i].Me1;
//you3.innerHTML = leftonread[i].Me;
//iread.innerHTML = leftonread[i].iRead;