const startButton = document.getElementById('start-button');
const lyricsContainer = document.getElementById('lyrics-container');
const audioPlayer = document.getElementById('audio-player');
const lyrics =
`12|Sinkin' under
15|Think my angel's fallen
18.3|Safe place plundered`;

// Safe place plundered
// Bastards kicks the doors in

// [Pre-Chorus]
// Makes the stitch and now I can't stop bleeding
// Three in the morning, I hadn't slept 'til the weekend
// Six feet and the dust still bleeding
// Don't give a fuck if my heart stops beating

// [Chorus]
// Hey, I'm begging you to stay
// My darkside won today
// My heart keeps breaking
// Over and over
// Hey, don't let me out your sight
// Can't trust myself tonight
// My heart keeps breaking
// Can you throw me off the ledge again?

// [Verse 2]
// Something holds me
// Footsteps in the basement
// I'm off my deep
// But there's no escaping

// [Pre-Chorus]
// Makes the stitch and now I can't stop bleeding
// Three in the morning, I hadn't slept 'til the weekend
// Six feet and the dust still bleeding
// Don't give a fuck if my heart stops beating

// [Chorus]
// Hey, I'm begging you to stay
// My darkside won today
// My heart keeps breaking
// Over and over
// Hey, don't let me out your sight
// Can't trust myself tonight
// My heart keeps breaking
// Can you throw me off the ledge again?

// [Bridge]
// Something's in the way
// Don't know what I could say
// Memories are haunting me
// A sickness taking over
// So bury me alive
// There's nowhere left to hide
// I say goodbye, 'cause maybe I
// Maybe I won't miss me when I'm gone
// [Chorus]
// Hey, I'm begging you to stay
// My darkside won today
// My heart keeps breaking
// Over and over
// Hey, don't let me out your sight
// Can't trust myself tonight
// My heart keeps breaking
// Can you throw me off the ledge again?

// [Outro]
// Can't trust myself tonight
// Can't trust myself tonight
// Can't trust myself
// Can you throw me off the ledge again?

let lyricsArray = lyrics.split('\n').map(line => line.split('|'));
let lineIndex = 0;

startButton.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        startButton.innerText = 'Pause';
        lyricsContainer.style.display = 'block';

        audioPlayer.addEventListener('timeupdate', function () {
            const currentTime = audioPlayer.currentTime;
            if (lineIndex < lyricsArray.length) {
                const line = lyricsArray[lineIndex];
                const timestamp = parseFloat(line[0]);
                if (!isNaN(timestamp) && currentTime >= timestamp) {
                    lyricsContainer.innerText = line[1];
                    lineIndex++;
                }
            }
        });
    } else {
        audioPlayer.pause();
        startButton.innerText = 'Start';
    }
});
