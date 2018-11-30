// Pointing to my API key in the config file
var mykey = config.MY_KEY;

function frequencyCount(emails) {

	var queryURL = mykey // How do call API key?

{ // Creating an AJAX call for the frequency button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

    // Printing the entire object to console
      console.log(response);

    }

}