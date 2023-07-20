import Player from '@vimeo/player';
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');


const player = new Player(iframe,{
   
        id: 'vimeo-player',
        width: 640
  
});

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem("videoplayer-current-time",JSON.stringify(seconds))
}
const savedTime = localStorage.getItem('videoplayer-current-time')

player.on('timeupdate', throttle(getCurrentTime , 1000));
 

player.setCurrentTime(savedTime)
.then(function(){

}).catch(function(error){
    switch (error.name) {
        case 'rangeError':
            
            break;
    
        default:
            break;
    }
})