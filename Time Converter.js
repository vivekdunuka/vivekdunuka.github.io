let myformEl = document.getElementById("myform");
let hrsinput = document.getElementById("hoursInput");
let minsinput = document.getElementById("minutesInput");
let errMsg = document.getElementById("errorMsg");
let buttn = document.getElementById("convertBtn");
let result = document.getElementById("timeInSeconds");
buttn.addEventListener("click", function(event) {
    event.preventDefault();
    if ((hrsinput.value === "" || hrsinput.value < 0) || (minsinput.value === "" || minsinput.value < 0)) {
        result.textContent = "";
        result.classList.remove("timeInSec");
        if (minsinput.value === "" || minsinput.value < 0) {
            errMsg.textContent = "Please enter a valid number of minutes";
        }
        if (hrsinput.value === "" || hrsinput.value < 0) {
            errMsg.textContent = "Please enter a valid number of hours";
        }
    } else {
        errMsg.textContent = "";
        result.classList.add("timeInSec");
        result.textContent = hrsinput.value * 3600 + minsinput.value * 60 + "s";
    }
});