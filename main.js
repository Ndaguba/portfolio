

var nav = document.getElementById("navigation");
var button = document.getElementById("toggle");

$('#navigation').hide();

$(document).ready(function () {
    $('#toggle').click(function(){
$('#navigation').slideToggle(700);

    })
});
