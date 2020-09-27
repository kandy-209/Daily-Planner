$(document).ready(function(){
const column = $(".col-lg-10");
const text = $("textarea");
const saveBtn = $(".saveBtn");
const container = [];
var hour = moment().format('HH');

$("#currentDay").text(moment().format("dddd, MMMM Do"));

setColor();
function currentHour() {
    
}

function setColor() {
    for (var i = 0; i < column.length; i++) {

        var timeCheck = $(column[i]).data("time");

        if(parseInt(hour) === timeCheck){
            $(column[i]).addClass("present");
        } 
        
        else if (parseInt(hour) > timeCheck){
            $(column[i]).addClass("past");
        }
        else (parseInt(hour) > timeCheck);{
            $(column[i]).addClass("future");
        }
    }
}

function savePage() {
    for (var i = 0; i < text.length; i++) {
        container.push(localStorage.getItem(i));
        text[i].value = container[i];
    }

}

$(".saveBtn").on("click", function () {
    var btnSave = this.value;
    var textSave = text[btnSave].value;
    localStorage.setItem(btnSave, textSave);
});

savePage();
setInterval(currentHour, 1000);

});