"use strict";

function showPlaylists(evt) {
    evt.preventDefault();

    $.get('/display-playlists', (response) => {
      $('#playlists-display').html(response);
      $('.play-playlist').on('submit', playPlaylists);
    });
    
}

// $( "#display-playlists-button" ).click(function() {
//   $( "#playlists-display" ).toggle( "slow", function() {
//   });
// });

$('#display-playlists-button').on('click', showPlaylists);
