import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(time => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  }, 1000)
);
let startTime = 0;
let getTime = localStorage.getItem('videoplayer-current-time');

if (getTime) {
  const parsedGetTime = JSON.parse(getTime);
  startTime = parsedGetTime.seconds;
}

player.setCurrentTime(startTime);
