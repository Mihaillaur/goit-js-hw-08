const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

function time(obj){
    const seconds = obj.seconds;
    console.log(seconds);
    localStorage.setItem('currentTime', JSON.stringify(seconds));
    }

const timeVideo = localStorage.getItem('currentTime');
    console.log(timeVideo);

player.on('timeupdate', throttle(time, 1000));
player.setCurrentTime(timeVideo);


