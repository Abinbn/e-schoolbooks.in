/*----------------------------------------------------*/
/* Mobile Navigation
------------------------------------------------------ */
jQuery('.mobileToggle').click(function() {
    if ($('.mainNav').hasClass('openNav')) {
        $('.mainNav').removeClass('openNav');
    } else {
        $('.mainNav').addClass('openNav');
    }
});

jQuery('.mainNav li a').click(function() {
    if ($('.mainNav').hasClass('openNav')) {
        $('.navigation').removeClass('openNav');
        $('.mainNav').removeClass('openNav');
    }
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function () {
  $('.smoothscroll').on('click',function (e) {    
    e.preventDefault(); 
    var target = this.hash, 
    $target = $(target); 
    $('html, body').stop().animate({      
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
      window.location.hash = target; 

    });
  });

});


/*----------------------------------------------------*/
/* Hero Animation
------------------------------------------------------ 


var hero = new TimelineMax({});
	hero.staggerFrom(".first", 0.7, {opacity: 0}, 0.5)
		.staggerFrom(".second", 0.5, {opacity: 0, y: 20}, 0.4, "-=0.2");

*/


/*-----------------------------------
Signup and other script



// FIREBASE


<!-- firebase -->
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js"></script>


<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAOxFa-XuX4yGzt2-438ANjXlcRA4OaWFM",
    authDomain: "eschoolbooks.firebaseapp.com",
    projectId: "eschoolbooks",
    storageBucket: "eschoolbooks.appspot.com",
    messagingSenderId: "175941142859",
    appId: "1:175941142859:web:a1295293b40721c3f480ce",
    measurementId: "G-3E69JFCMBJ"
  };

  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

    // Google Sign-In
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log('User signed in:', user);
        // Redirect or perform other actions after successful sign-in
        window.location.href = "/dashboard"; // Replace with your desired redirect URL
      })
      .catch((error) => {
        console.error('Google Sign-In error:', error);
      });
  }


  
</script>




-------------------------------------*/



// JavaScript code to add a video element to the hero sections
document.addEventListener("DOMContentLoaded", function () {
  // Video source URL
  const videoSource = "videos/christmas-background.mov";
  

  // Get all hero sections
  const heroSections = document.querySelectorAll("section[id^='hero']");

  // Loop through each hero section and add a video element
  heroSections.forEach((hero, index) => {
      // Create a video element
      const videoElement = document.createElement("video");
      videoElement.src = videoSource;
      videoElement.alt = "Christmas_celebration_video";
      videoElement.autoplay = true;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.playsInline = true;

      // Add video element to the hero section
      hero.insertBefore(videoElement, hero.firstChild);
  });
});


// audio

 // JavaScript to handle mute/unmute functionality
 document.addEventListener('DOMContentLoaded', function () {
  var backgroundMusic = document.getElementById('backgroundMusic');
  var muteButton = document.getElementById('muteButton');

  muteButton.addEventListener('click', function () {
     if (backgroundMusic.paused) {
        backgroundMusic.play();
        muteButton.textContent = 'Mute';
     } else {
        backgroundMusic.pause();
        muteButton.textContent = 'Unmute';
     }
  });

  // Log errors to the console
  backgroundMusic.addEventListener('error', function (e) {
     console.error('Error loading audio:', e);
  });

  // Log playback status to the console
  backgroundMusic.addEventListener('playing', function () {
     console.log('Audio is playing');
  });

  backgroundMusic.addEventListener('pause', function () {
     console.log('Audio is paused');
  });
});



// Audio inputting 

// main.js

document.addEventListener('DOMContentLoaded', function () {
  // Add the audio element
  var audioElement = document.createElement('audio');
  audioElement.id = 'backgroundMusic';
  audioElement.autoplay = true;
  audioElement.innerHTML = 'Your browser does not support the audio element.';
  
  var sourceElement = document.createElement('source');
  sourceElement.src = 'file:///C:/Users/User/Desktop/esb%20website%20-%20Copy/e-schoolbooks.in/esb/audio/merry-xmas.mp3';
  sourceElement.type = 'audio/mp3';
  audioElement.appendChild(sourceElement);

  document.body.appendChild(audioElement);

  // Add the mute button to the last li in the nav
  var nav = document.querySelector('nav ul');
  
  // Create a new li element
  var li = document.createElement('li');

  // Add the mute button to the li
  var muteButton = document.createElement('img');
  muteButton.src = 'https://api.iconify.design/material-symbols:android-now-playing-outline.svg?color=%23ff4136';
  muteButton.alt = 'Music';
  muteButton.className = 'music-svg';
  muteButton.id = 'muteButton';
  muteButton.style.width = '30px';
  muteButton.style.height = '30px';
  muteButton.style.cursor = 'pointer';

  li.appendChild(muteButton);

  // Add the li to the nav
  nav.appendChild(li);

  // Handle mute/unmute functionality
  var backgroundMusic = document.getElementById('backgroundMusic');
  var muteButton = document.getElementById('muteButton');

  muteButton.addEventListener('click', function () {
     if (backgroundMusic.paused) {
        backgroundMusic.play();
     } else {
        backgroundMusic.pause();
     }
  });
});

