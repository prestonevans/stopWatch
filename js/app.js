const p = document.querySelector('p');
let centiseconds = 0;
let intervalId;

function stop() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      let time = '';
      const hours = Math.floor(centiseconds / 360000);
      const minutes = Math.floor((centiseconds / 6000) % 60);
      const seconds = Math.floor((centiseconds / 100) % 60);
      time += hours == 0 ? '00:' : hours < 10 ? `0${hours}:` : `${hours}:`;
      time +=
        minutes == 0 ? '00:' : minutes < 10 ? `0${minutes}:` : `${minutes}:`;
      time +=
        seconds == 0 ? '00:' : seconds < 10 ? `0${seconds}:` : `${seconds}:`;
      time +=
        String(centiseconds).length == 1
          ? `0${String(centiseconds).slice(-1)}`
          : `${String(centiseconds).slice(-2)}`;
      p.innerText = time
      centiseconds++ 
    }, 10);
    return;
  }
  clearInterval(intervalId);
  intervalId = undefined;
}

function reset() {
  centiseconds = 0;
  p.innerText = '00:00:00:00';
  clearInterval(intervalId);
  intervalId = undefined;
}
