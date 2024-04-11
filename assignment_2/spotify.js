function displayResultsWithImages(data) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; 
    data.tracks.items.forEach(track => {
      const trackName = track.name;
      const artistName = track.artists.map(artist => artist.name).join(', ');
      const imageUrl = track.album.images[0].url; 
      const resultItem = document.createElement('div');
      resultItem.classList.add('song-item');
      resultItem.innerHTML = `
        <img src="${imageUrl}" alt="${trackName}" />
        <div class="song-details">
          <h3>${trackName}</h3>
          <p>by ${artistName}</p>
        </div>
      `;
      resultItem.addEventListener('click', () => {
        playSong(track.preview_url);
      });
      resultsContainer.appendChild(resultItem);
    });
  }

  
  function playSong(previewUrl) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = previewUrl;
    audioPlayer.play();
  }
  
  document.getElementById('search-button').addEventListener('click', function() {
    const singer = document.getElementById('search-input').value;
    searchSongs(singer);
  });

  document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const singer = document.getElementById('search-input').value;
      searchSongs(singer);
    }
  });
  
  
  function searchSongs(singer) {
    const accessToken = 'BQC1A32DeptrmxcG3I0QOq0FJlJ_rOOc1dpPvjgGfINxrffnt-tlUdnB1yPwqwq3YnOSjgGCGAM6YZIq6rg1OEXO2M3LlHjHXkYMz2VcGiqIuc84-C27ElndkwAeRd4T68leq2yW-_aEDWjNRyGTS2nSvgSeY45JdbRwjvajHpHCUwk0OKPDeqOxdr7AQHdQG9AgD6vosFswy-S-YiE&token_type=Bearer&expires_in=3600';
    const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(singer)}&type=track`;
  
    fetch(searchUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      displayResultsWithImages(data); 
    })
    .catch(error => {
      console.error('Error searching for songs:', error);
    });
  }
  