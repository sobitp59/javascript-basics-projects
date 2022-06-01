const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const deadlineItems = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear,tempMonth,tempDay + 5,8,30,0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();


giveaway.textContent = `giveaway will end on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}pm`;

// future time in milliseconds
const futureTime = futureDate.getTime();

const remainingTime = () =>{

  // current time in milliseconds
  const todayTime = new Date().getTime();
  const timeDifference = futureTime - todayTime;

  // 1s = 1000ms : 1min = 60s : 1hr = 60min : 1day : 24hrs
  
  // values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  // calculate values
  const remainingDays =  Math.floor(timeDifference / oneDay);
  const remainingHours = Math.floor((timeDifference % oneDay) / oneHour);
  const remainingMinutes = Math.floor((timeDifference % oneHour) /oneMinute);
  const remainingSeconds = Math.floor((timeDifference % oneMinute) / 1000);

  // function for adding 0 before values lesser than 10 in counter
  const format = (item) =>{
    if(item < 10){
      return `0${item}`;
    }
    return item;
  }

  const values = [remainingDays, remainingHours, remainingMinutes, remainingSeconds];

  deadlineItems.forEach((item,index)=>{
    item.innerHTML = format(values[index]);
  });

  if(timeDifference < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h2>Sorry! Giveaway deadline is over.</h2>`
  }
}

// countdown timer
let countdown = setInterval(remainingTime,1000);
remainingTime();
