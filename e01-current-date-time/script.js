//1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const container = document.getElementById('container')
const date = document.getElementById('date')
const time = document.getElementById('time')
const btn = document.getElementById('btn')

const display = () => {
  const today = new Date();

  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const hours = () => {
    if (today.getHours() === 0) {
      return ('12 AM');
    }
    if (today.getHours() > 12) {
      return (today.getHours() - 12) + (' PM');
    }
    return (today.getHours() + (' AM'))
  }

  const min = today.getMinutes();
  const sec = today.getSeconds();

  date.innerHTML = `Today is : ${DAYS[today.getDay()]}.`;
  time.innerHTML = `Current time is : ${hours()} : ${min} : ${sec}`;
  return
}

btn.innerHTML = "Click me to display date and time";
btn.addEventListener('click', (e) => display());

