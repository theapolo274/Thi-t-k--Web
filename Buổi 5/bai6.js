function a() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("ketquaa").value = result;

    displayOperation("a", "Phép cộng", num1, num2, result);
}

function s() {
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var result = num3 - num4;
    document.getElementById("ketquas").value = result;

    displayOperation("s", "Phép trừ", num3, num4, result);
}

function m() {
    var num5 = parseFloat(document.getElementById("num5").value);
    var num6 = parseFloat(document.getElementById("num6").value);
    var result = num5 * num6;
    document.getElementById("ketquam").value = result;

    displayOperation("m", "Phép nhân", num5, num6, result);
}

function d() {
    var num7 = parseFloat(document.getElementById("num7").value);
    var num8 = parseFloat(document.getElementById("num8").value);

    if (num8 !== 0) {
        var result = (num7 / num8);
        document.getElementById("ketquad").value = result;

        displayOperation("d", "Phép chia", num7, num8, result);
    } else {
        document.getElementById("ketquad").value = alert("Không thể chia cho 0");
    }
}

function displayOperation(operationClass, operation, operand1, operand2, result) {
    var displayDiv = document.querySelector('.hienthi');
    var formattedResult = result.toFixed(4);
    var operationText = `${operand1} ${getOperatorSymbol(operation)} ${operand2} = ${result}`;

    var resultParagraph = displayDiv.querySelector(`.${operationClass}`);
    
    if (!isNaN(result)) {
        resultParagraph.style.color = "red";
    } else {

        resultParagraph.style.color = "";
    }

    var previousContent = resultParagraph.getAttribute("data-previous-content");
    if (previousContent !== operationText) {
        resultParagraph.textContent = operationText;
        resultParagraph.setAttribute("data-previous-content", operationText);
    }
}

function getOperatorSymbol(operation) {
    switch (operation) {
        case 'Phép cộng':
            return '+';
        case 'Phép trừ':
            return '-';
        case 'Phép nhân':
            return '*';
        case 'Phép chia':
            return '/';
        default:
            return '';
    }
}
