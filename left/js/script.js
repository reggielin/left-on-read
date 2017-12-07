$(function(){
	
window.delayedMessage = function() {
	setTimeout(function(){
	
		var y1 = $(document).getElementById('Y1');
		console.log(y1);
		var str1 = y1.length;
		console.log(str1);
		if (str1 === 0){
			$(document).getElementById('You1').style.visibility = "hidden";
		} else $(document).getElementById('You1').style.visibility = "visible";
		}

		var m1 = $(document).getElementById('M1').innerHTML;
		var str2 = m1.length;
		console.log(str2);
		if (str2 === 0){
			$(document).getElementById('Me1').style.visibility = "hidden";
		} else $(document).getElementById('Me1').style.visibility = "visible";
		}

		var y2 = $(document).getElementById('Y2').innerHTML;
		var str3 = y2.length;
		console.log(str3);
		if (str3 === 0){
			$(document).getElementById('You2').style.visibility = "hidden";
		} else $(document).getElementById('You2').style.visibility = "visible";
		}

		var m2 = $(document).getElementById('M2').innerHTML;
		var str4 = m2.length;
		console.log(str4);
		if (str4 === 0){
			$(document).getElementByI	d('Me2').style.visibility = "hidden";
		} else $(document).getElementById('Me2').style.visibility = "visible";
		}

		var y3 = $(document).getElementById('Y3').innerHTML;
		var str5 = y3.length;
		console.log(str5);
		if (str5 === 0){
			$(document).getElementById('You3').style.visibility = "hidden";
		}else $(document).getElementById('You3').style.visibility = "visible";
		}

	}, 500);
};
	
	});
