const player=document.getElementById("music-player");
const title=document.getElementById("title");
const image=document.getElementById("cd-image");
const pause_button=document.getElementById("play-pause");
var songs=[
    ["track1.mp3","Tenebre Rosso Sangue","track1.png"],
    ["track2.mp3", "Soft Fuzzy Man","track2.png"]
];
var index=0;
var count=songs.length;



function skip(x){
    index=(index+x);
    if(index>=count) index=0;
    else if(index<0) index=count-1;
    player.src = "resources/audio/tracks/"+songs[index][0];
    player.load();
    player.play();
    
    title.innerHTML = songs[index][1];
    image.src="resources/audio/covers/" + songs[index][2];
    pause_button.innerHTML="||";
}



function play_pause(){
    if (player.paused) {
        player.play();
        pause_button.innerHTML="||";
    }
    else {
        player.pause();
        pause_button.innerHTML="▶";
    }
}


player.addEventListener('ended',function(e){
    skip(1);
});

function playAudio(x){
    let a=document.getElementById(x);
    if (a.paused) {
        a.play();
    }
    else {
        a.pause();
    }
}


function setVolume(vol,sounds){
    document.getElementById(sounds).volume = document.getElementById(vol).value;
}
