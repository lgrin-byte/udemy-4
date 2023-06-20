const clock = document.querySelector('#clock');

const getCurrentTime = () => {
  const date = new Date();

  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  const currentTime = `${hour} : ${minute} : ${second}`;

  clock.innerText = `${currentTime}`;
}


getCurrentTime();
setInterval(getCurrentTime, 1000)