 
 let songs = [
     {
         name: "ek_sarvanam",
         title: "ek sarvanam",
         artist: "Sajan Raj Vaidya",
     },
     {
         name: "thamana_haat",
         title: "thamana haat",
         artist: "Samir Shrestha",
     },
     {
         name: "kuri_basechu",
         title: "kuri basechu",
         artist: "Samir Shrestha",
     },
 ];




let music = document.querySelector("audio");
let play = document.getElementById("play");
let img = document.querySelector("img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let title = document.getElementById("title");
let artist = document.getElementById("artist");

// Play music or Pause music
let isPlaying = false;
function playmusic(){
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime');
}
function pausemusic(){
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime');
}


// next or previous music
let songsCount = 0;
function nextMusic(){
    songsCount = (songsCount + 1)%songs.length;
    loadsong(songs[songsCount]);
    playmusic();

}
function prevMusic(){
    songsCount = (songsCount - 1 + songs.length)%songs.length;
    loadsong(songs[songsCount]);
    playmusic();

}


// Event listener
play.addEventListener('click', function(){
    isPlaying ? pausemusic() : playmusic(); 
})
prev.addEventListener('click',prevMusic);
next.addEventListener('click',nextMusic);


// Load music
function loadsong(songs){
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "audio/"+songs.name+".mp3";
    img.src = "img1/"+songs.name+".jpg";
}