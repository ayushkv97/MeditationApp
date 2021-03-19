alert("Please view this page in desktop(This page is not responsive.)");
const app =()=>{
    const song=document.querySelector('.song');
    const play=document.querySelector('.play');
    const video=document.querySelector('.videoContainer video');
    const sounds=document.querySelectorAll('.musicSelect button');
    const timeDisplay=document.querySelector('.timeDisplay');
    const timeSelect=document.querySelectorAll('.timeSelect button');
    let fakeDuration=600;//Equivalent to 10 minutes
    play.addEventListener('click',function () {
        
        checkPlaying(song);
        
        
    });
    //Select Time Duration

    timeSelect.forEach(option =>{
        option.addEventListener('click', function(){
            fakeDuration=this.getAttribute('data-time');
            timeDisplay.textContent=`${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration%60)}`;
        })
    });
    

    const checkPlaying=()=>{
        if(song.paused)
        {
        song.play();
        video.play();
        // play.setAttribute("src","./svg/pause.png");//this can also be used
        play.src="./svg/pause.png"; 
        }
        else
        {
        song.pause();
        video.pause();
        play.src="./svg/play-button.png";
        }
    }
    //Starting the timer
    song.ontimeupdate=()=>{
        let currentTime=song.currentTime;
        let elapsedTime=fakeDuration-currentTime;
        let minutes=Math.floor(elapsedTime/60);
        let seconds=Math.floor(elapsedTime%60);
        timeDisplay.textContent=`${minutes}:${seconds}`;
        if(currentTime>=fakeDuration)
        {
            song.pause();
            song.currentTime=0;
            play.src='./svg/play-button.png';
            video.pause();
        }
    }
    //Pick different sound
    sounds.forEach(sound =>{
        sound.addEventListener('click',function(){
            song.src=this.getAttribute('data-sound');
            video.src=this.getAttribute('data-video');
            checkPlaying(song);
        });
    });
};
app();
