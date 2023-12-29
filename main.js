// const Webamp = window.Webamp;

if (!Webamp.browserIsSupported()) {
  alert("Oh no! Webamp does not work in this browser!");
  throw new Error("What's the point of anything?");
}

const webamp = new Webamp({

  initialSkin: {
    url: "https://cdn.jsdelivr.net/gh/hanqizhao/hanqizhao.github.io@main/skin/Winamp5_Classified_v5.5.wsz",
  },

  initialTracks: [
    {
        metaData: {
            artist: "Radiohead",
            title: "Everything in its right place"
        },
        // NOTE: Your audio file must be served from the same domain as your HTML
        // file, or served with permissive CORS HTTP headers:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
        url: "https://cdn.jsdelivr.net/gh/hanqizhao/hanqizhao.github.io@main/music/01%20-%20RADIOHEAD%20(KID%20A)%20-%20Everything%20in%20its%20right%20place.mp3",
        duration: 5.322286
    },
    {
      metaData: {
          artist: "Radiohead",
          title: "Optimistic"
      },
      // NOTE: Your audio file must be served from the same domain as your HTML
      // file, or served with permissive CORS HTTP headers:
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
      url: "https://cdn.jsdelivr.net/gh/hanqizhao/hanqizhao.github.io@main/music/06%20-%20RADIOHEAD%20(KID%20A)%20-%20Optimistic.mp3",
      duration: 5.322286
    },
    {
        metaData: {
            artist: "Radiohead",
            title: "Idioteque"
        },
        url: "https://cdn.jsdelivr.net/gh/hanqizhao/hanqizhao.github.io@main/music/08%20-%20RADIOHEAD%20(KID%20A)%20-%20Idioteque.mp3",
        duration: 5.322286
    }
  ],

});

webamp.crossOrigin = "anonymous";
// Returns a promise indicating when it's done loading.
webamp.renderWhenReady(document.getElementById('app'));

webamp.onWillClose((cancel) => {
  cancel();
});


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






