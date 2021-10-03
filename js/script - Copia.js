  $("#run").click(function() {
  	$("#resultado").hide();
  	$("#resultado").fadeIn();
  });

  function isNumberKey(evt) {
  	var charCode = (evt.which) ? evt.which : event.keyCode
  	if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  	return true;
  }

  function checkNumberFieldLength(elem) {
  	if (elem.value.length > 4) {
  		elem.value = elem.value.slice(0, 4);
  	}
  }

  function addCommas(nStr) {
  	nStr += '';
  	x = nStr.split('.');
  	x1 = x[0];
  	x2 = x.length > 1 ? ',' + x[1] : '';
  	var rgx = /(\d+)(\d{3})/;
  	while (rgx.test(x1)) {
  		x1 = x1.replace(rgx, '$1' + '.' + '$2');
  	}
  	return x1 + x2;
  }

  function run() {
  	var inputY = $('#inputY').val();
  	var inputX = $('#inputX').val();
  	if (inputY + 1 < 2) {
  		inputY = 2560;
  	}
  	if (inputX + 1 < 2) {
  		inputX = 1080;
  	}
  	var B1 = inputY;
  	var B2 = inputX;
  	var T1 = Number(B1) + 1;
  	var T2 = Number(B2) + 1;
  	var calD = 0;
  	var calE = 0;
  	var d = 0;
  	var limite = 5200;
  	if (B1 > 3440) {
  		limite = 10000;
  	}
  	var fim = "<tr><th>X</th><th>Y</th><th>Pixel Count</th><th>Increase(%)</th><th>Res Scale</th></tr>";
  	while (T1 < limite) {
  		T2 = Number(B2) + 1;
  		while (T2 <= 2160) {
  			calD = B1 * T2;
  			calE = B2 * T1;
  			d = calD - calE;
  			if (d == 0) {
  				var aumento = (((T1 * T2) / (B1 * B2)) * 100).toFixed(0);
  				if (aumento == 150 || aumento == 182 || aumento == 225 || aumento == 400) {
  					fim += ("<tr class='recomendado'><th>" + T1 + "</th><th>" + T2 + "</th><th>" + addCommas(T1 * T2) + "</th><th>" + (((T1 * T2) / (B1 * B2)) * 100).toFixed(0) + " %" + "</th><th>" + ((T2 / B2).toFixed(3)).replace(".", ",") + "</th></tr>");
  				} else {
  					fim += ("<tr><th>" + T1 + "</th><th>" + T2 + "</th><th>" + addCommas(T1 * T2) + "</th><th>" + (((T1 * T2) / (B1 * B2)) * 100).toFixed(0) + " %" + "</th><th>" + ((T2 / B2).toFixed(3)).replace(".", ",") + "</th></tr>");
  				}
  				T2 = T2 + 1;
  			} else {
  				T2 = T2 + 1;
  			}
  		}
  		T1 += 1;
  	}
  	$("#resposta").html(fim);
  }