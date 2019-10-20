

var nav = document.getElementById("navigation");
var button = document.getElementById("toggle");

$('#navigation').hide();

$(document).ready(function () {
    $('#toggle').click(function(){
$('#navigation').slideToggle(700);

    })
});

newArray = [];
newArray = [8,7,6,5,4,3,2,1];
console.log(newArray[0] + newArray[3]);
console.log(newArray.sort());
newArray.push(9);
console.log(newArray);