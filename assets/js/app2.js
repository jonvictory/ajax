$(document).ready()
var localTopics = JSON.parse(localStorage.getItem("storedTopics"));
console.log(localTopics)
var topics = [
    {
        name: "aeon flux",
        offset: 0
    },

    {
        name: "liquid television",
        offset: 0
    },

    {
        name: "ghost in the shell",
        offset: 0
    },

    {
        name: "akira",
        offset: 0
    },

    {
        name: "beavis and butthead",
        offset: 0
    },
]


buttQuest()

function buttQuest() {
    if (Array.isArray(localTopics)) {
        
        rendButtLoc();

    
}
else {
    rendButt();
}
}

//on-click actions generated by buttons
function rendButt() {

    //for loop will generate the buttons on screen load
    $('#big-butt-holder').empty();

    for (var i = 0; i < topics.length; i++) {

        var buttHoleDer = $('<div>')
        var butt = $('<button>');

        butt.addClass('btn btn-primary butt');
        butt.attr('data-name', topics[i].name);
        butt.text(topics[i].name);

        buttHoleDer.addClass('col-md-2 butt-hole-der');
        buttHoleDer.attr('id', topics[i].name);

        $(buttHoleDer).append(butt);
        $('#big-butt-holder').append(buttHoleDer);

    }
}

function rendButtLoc() {

    //for loop will generate the buttons on screen load

    
    $('#big-butt-holder').empty();

    for (var i = 0; i < localTopics.length; i++) {

        var buttHoleDer = $('<div>')
        var butt = $('<button>');

        butt.addClass('btn btn-primary butt');
        butt.attr('data-name', localTopics[i].name);
        butt.text(localTopics[i].name);

        buttHoleDer.addClass('col-md-2 butt-hole-der');
        buttHoleDer.attr('id', localTopics[i].name);

        $(buttHoleDer).append(butt);
        $('#big-butt-holder').append(buttHoleDer);

    }
localStorage.setItem("storedTopics", JSON.stringify(localTopics));
}

$('body').on('click', 'button', function () {

    var topic = $(this).attr('data-name');
    for (k = 0; k < topics.length; k++) {
        if (topics[k].name == topic) {
            var offsetter = topics[k].offset * 10
            topics[k].offset++
        }
    }

    var apiKey = 'HRNSqbQGoSdDkvyDM5FS8DxPloAKhm8e'
    offsetter
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + topic + "&limit=10&offset=" + offsetter + "&rating=PG-13&lang=en"

    console.log(topic)

    console.log(offsetter)
    console.log(topics)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;
        console.log(response)
        console.log(results);


        for (var j = 0; j < results.length; j++) {

            var imgCont = $('<div class="col-md-2 img-cont">')
            var rating = results[j].rating;
            var origin = results[j].images.original.url;
            console.log(rating)
            // var title
            // var tags
            var pRate = $('<p>').text('Rating: ' + rating)
            var pOrigin = $('<p>').html('<a href="' + origin + '" target="_blank">Full-Size</a>')

            var imgMaster = $('<img class="giffer">')
            imgMaster.attr('src', results[j].images.fixed_height_small_still.url)
            imgMaster.attr('data-state', 'still')
            imgMaster.attr('data-still', results[j].images.fixed_height_small_still.url)
            imgMaster.attr('data-anim', results[j].images.fixed_height_small.url)

            $(imgCont).prepend(pOrigin);
            $(imgCont).prepend(pRate);
            $(imgCont).prepend(imgMaster);

            $('#big-img-holder').prepend(imgCont);



        }

    })
})

//trigger animations
$('body').on('click', '.giffer', function () {

    var state = $(this).attr('data-state')

    console.log(state)

    if (state == 'still') {
        $(this).attr('src', $(this).attr('data-anim'));
        $(this).attr('data-state', 'anim');

    }
    else if (state == 'anim') {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
    }
})

//render new button from text input
$('body').on("click", "#sub-butt", function (event) {
    event.preventDefault();

    var topicGet = $("#gif-butt").val().trim();

    var topicName = topicGet;
    var topicOffset = 0;

    var topicPush = {
        name: topicName,
        offset: topicOffset
    }

    topics.push(topicPush);
    
    $('#gif-butt').val("")

    localStorage.setItem("storedTopics", JSON.stringify(topics));
    localTopics = JSON.parse(localStorage.getItem("storedTopics"));
    buttQuest()

console.log(localStorage.getItem("storedTopics"))
console.log(localTopics)
});

$('body').on("click", "#gif-clear", function (event) {
    $('#big-img-holder').empty();

})

$('body').on("click", "#hist-clear", function (event) {

    $('#big-butt-holder').empty();

    topics = [
        {
            name: "aeon flux",
            offset: 0
        },

        {
            name: "liquid television",
            offset: 0
        },

        {
            name: "ghost in the shell",
            offset: 0
        },

        {
            name: "akira",
            offset: 0
        },

        {
            name: "beavis and butthead",
            offset: 0
        },
    ]
    rendButt();


})