function searchBandsInTown(artist) {
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        // Printing the entire object to console
        console.log(response);
        // Constructing HTML containing the artist information
        let artistName = $("<h1>").html(response.name);
        let artistURL = $("<a>").attr("href", response.url).append(artistName);
        let artistImage = $("<img>").attr("src", response.thumb_url);
        let trackerCount = $("<h2>").html(response.tracker_count + " fans tracking this artist");
        let upcomingEvents = $("<h2>").html(response.upcoming_event_count + " upcoming events");
        let goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");
        // Empty the contents of the artist-div, append the new artist content
        $("#artist-div").empty();
        $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
    });
}
// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    let artist = $("#artist-input").val().trim();
    // Running the searchBandsInTown function (passing in the artist as an argument)
    searchBandsInTown(artist);
});