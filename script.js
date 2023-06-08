const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function rotateClockHands() {
  // Get the current time
  const currentTime = new Date();

  // Calculate the angles for the clock hands
  const hourAngle = (currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5;
  const minuteAngle = currentTime.getMinutes() * 6 + currentTime.getSeconds() * 0.1;
  const secondAngle = currentTime.getSeconds() * 6;

  // Apply the angles to the clock hands
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Call the rotateClockHands function every second
setInterval(rotateClockHands, 1000);