let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Everything in its right place",
    artist: "Radiohead",
    // image: "",
    // redircet to my file
    path: "https://ia802206.us.archive.org/18/items/kid-a-full-album/01%20-%20RADIOHEAD%20%28KID%20A%29%20-%20Everything%20in%20its%20right%20place.mp3"
  },
  {
    name: "Optimistic",
    artist: "Radiohead",
    // image: "",
    path: "https://ia802206.us.archive.org/18/items/kid-a-full-album/06%20-%20RADIOHEAD%20%28KID%20A%29%20-%20Optimistic.mp3"
  },
  {
    name: "Idioteque",
    artist: "Radiohead",
    // image: "",
    path: "https://ia802206.us.archive.org/18/items/kid-a-full-album/08%20-%20RADIOHEAD%20%28KID%20A%29%20-%20Idioteque.mp3",
  },
];


document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".section");
  var navLinks = document.querySelectorAll(".navbar a");

  function highlightNav() {
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;

      sections.forEach(function (section, index) {
          // give a color to top to display it
          var top = section.offsetTop;

          
          var bottom = top + section.clientHeight;

          if (scrollPosition >= top + 300 && scrollPosition < bottom + 200) {
              navLinks.forEach(function (navLink) {
                  navLink.classList.remove("active");
              });
              navLinks[index].classList.add("active");
          }
      });
  }

  // Call the function on scroll
  window.addEventListener("scroll", highlightNav);

  // Call the function on page load (in case the page is loaded already scrolled)
  highlightNav();
});


function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();
  curr_track.crossOrigin = "anonymous";

  // track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}


// Load the first track in the tracklist
loadTrack(track_index);


function playTrack() {
  // Assuming curr_track is an Audio element
  setVolume();
  isPlaying = true;

  curr_track.play();
  var context = new AudioContext();
  var src = context.createMediaElementSource(curr_track);
  var analyser = context.createAnalyser();

  var canvas = document.querySelector(".canvas"); // Fix the selector to target the canvas element correctly
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext("2d");

  src.connect(analyser);
  analyser.connect(context.destination);

  analyser.fftSize = 256;

  var bufferLength = analyser.frequencyBinCount;
  console.log(bufferLength);

  var dataArray = new Uint8Array(bufferLength);

  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;

  var barWidth = (WIDTH / bufferLength) * 2.5;
  var barHeight;
  var x = 0;

  function renderFrame() {
    requestAnimationFrame(renderFrame);

    x = 0;

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    for (var i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];
      
      var r = barHeight + (25 * (i/bufferLength));
      var g = 250 * (i/bufferLength);
      var b = 50;

      ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

      x += barWidth + 1;
    }
  }

  curr_track.play();
  renderFrame();
}


function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  // playpause_btn.innerHTML = '<i class="fa-solid fa-play"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}


function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


