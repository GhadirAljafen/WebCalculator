
function getHistory() {
    return document.getElementById("history_value").innerText;
}
function printHistory(number) {

    return document.getElementById("history_value").innerText =number;
}
function getOutput() {
    return document.getElementById("output_value").innerText;
}
function printOutput(number) {
    if (number == "") {
        document.getElementById("output_value").innerText = number;
    }
    else
    document.getElementById("output_value").innerText = getFormatedNumber(number);
}
// To format the output with comma
function getFormatedNumber(number) {
    var n = Number(number);
    var value = n.toLocaleString("en");
    return value
}
// to return the format to original
function reverseNumberFormat(number) {
    return Number(number.replace(/,/g,''));
}

var operator = document.getElementsByClassName("btnOperation");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function (){
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "clear_entry") {
            printOutput("");
        }
       
        else {
            var output = getOutput();
            var history = getHistory();
            //if (this.id == ".") {
            //    output = output + this.id;
            //}
            if (output == "" && history != "") {

                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length-1);
                }

            }
        

            if (output != "" || history != "") {
                output = output == "" ?
                    output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
        
    });
}

var numbers = document.getElementsByClassName("button");
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        // check if the output is a number
        if (output != NaN)
            output = output + this.id;
        printOutput(output);
    });
}
