$("#run").click(function() {
    $("#resultado").hide();
    $("#resultado").fadeIn();
});

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
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
        inputY = 1440;
        //inputY = 1080;
    }
    if (inputX + 1 < 2) {
        inputX = 3440;
        //inputX = 2560;
    }
    var resultTable = "<tr><th>X</th><th>Y</th><th>Pixel Count</th><th>Increase(%)</th><th>Res Scale</th></tr>";
    var razao = inputY / inputX

    var x
    var y = 2161
    while (y > inputY) {
        y = y - 1
        x = y / razao
        if (Number.isInteger(x)) {
            if (y == 1080 || y == 1440 || y == 1620 || y == 2160) {
                resultTable += ("<tr class='recomendado'><th>" + x + "</th><th>" + y + "</th><th>" + addCommas(x * y) + "</th><th>" + (((x * y) / (inputX * inputY)) * 100).toFixed(0) + " %" + "</th><th>" + ((y / inputY).toFixed(3)).replace(".", ",") + "</th></tr>");
            } else {
                resultTable += ("<tr><th>" + x + "</th><th>" + y + "</th><th>" + addCommas(x * y) + "</th><th>" + (((x * y) / (inputX * inputY)) * 100).toFixed(0) + " %" + "</th><th>" + ((y / inputY).toFixed(3)).replace(".", ",") + "</th></tr>");
            }
          }
        }

    y = inputY
    while (y >= 1080) {
        y = y - 1
        x = y / razao
        if (Number.isInteger(x)) {
            if (y == 1080 || y == 1440 || y == 1620 || y == 2160) {
                resultTable += ("<tr class='recomendado'><th>" + x + "</th><th>" + y + "</th><th>" + addCommas(x * y) + "</th><th>" + (((x * y) / (inputX * inputY)) * 100).toFixed(0) + " %" + "</th><th>" + ((y / inputY).toFixed(3)).replace(".", ",") + "</th></tr>");
            } else {
                resultTable += ("<tr><th>" + x + "</th><th>" + y + "</th><th>" + addCommas(x * y) + "</th><th>" + (((x * y) / (inputX * inputY)) * 100).toFixed(0) + " %" + "</th><th>" + ((y / inputY).toFixed(3)).replace(".", ",") + "</th></tr>");
            }
        }
    }



    $("#resposta").html(resultTable);
}
