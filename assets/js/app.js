$(document).ready()

var topics = ["bob's burgers", "space ghost", "castlevania", "invader zim", "aeon flux"]


rendButt();

function rendButt() {

//this will empty out the button holder div on load, before the loop runs to populate it. 
// $("#butt-holder").empty();

//for loop will generate the buttons on screen load

for (var i = 0; i < topics.length; i++) {

var butt = $('<button>');

butt.addClass('btn btn-primary butt');
butt.attr('data-name', topics[i]);
butt.text(topics[i]);

$('#butt-holder').append(butt);

}

}

function dispTopInfo() {

    var topic = $(this).attr('data-name');
    var apiKey = HRNSqbQGoSdDkvyDM5FS8DxPloAKhm8e
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&q="+topic+"&limit=10&offset=0&rating=G&lang=en"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          
      }
}