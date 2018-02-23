function searchBandsInTown(artist) {
    // Add code to query the bands in town api searching for the artist recieved as an argument to this function
    let queryURL = "https://rest.bandsintown.com/artists" + artist + "?app_id=musicLove";
    $.ajax({
        method: GET,
        url: queryURL
    }).done(function(response){
        // Console.log the entire response
        console.log(response);
    });
    // Using jQuery, append the following to the #artist-div :
    // The artist's name
    let artistName = $("<h3>").text(response.name);
    // The artists thumbnail image
    let artistImage = $("<img>").attr("src",response.thumb_url);
    // The number of fans tracking this artist
    let fansTracking = $("<h4>").text(response.tracker_count);
    // The number of upcoming events for this artist
    let upcomingEvent = $("<h5>").text(response.upcoming_event_count)
    // A link to the bandsintown url for this artist
    let bandsURL = $("<a>").attr("href",response.url).append(artistName);
    let goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");
    // Note: Append actual HTML elements, not just text
    $("#artist-div").empty();
    $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
}
// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var artist = $("#artist-input").val().trim();
    // Running the searchBandsInTown function (passing in the artist as an argument)
    searchBandsInTown(artist);
});