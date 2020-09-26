$(document).ready(function(){
const column = $(".col-lg-10");
const text = $("textarea");
const saveBtn = $(".saveBtn");
const container = [];
var hour = moment().format('HH');

$("#currentDay").text(moment().format("dddd, MMMM Do"));


function currentHour() {
    setColor(hour);
}

function setColor(time) {
    for (var i = 0; i < column.length; i++) {
        if ($(column[i]).attr("id") < time) {
            $(column[i]).addClass("past");

        }
        else if ($(column[i]).attr("id") > time) {
            $(column[i]).addClass("future");
        }
            
        else ($(column[i]).attr("id") < time) ;{
             $(column[i]).addClass("present");

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
setColor(hour);
setInterval(currentHour, 1000);

});