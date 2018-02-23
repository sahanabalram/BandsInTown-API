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
    // The number of upcoming events for this artist
    // A link to the bandsintown url for this artist
    // Note: Append actual HTML elements, not just text
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