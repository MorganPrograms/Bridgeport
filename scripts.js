// Function to load external files

function includeHTML() {
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");
    var banner = document.getElementById("banner");
    var calender = document.getElementById("calendar");

    // Load header.html
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        });

    // Load footer.html
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        });
    fetch("banner.html")
        .then(response => response.text())
        .then(data => {
            banner.innerHTML = data;
        });
    fetch("calendar.html")
        .then(response => response.text())
        .then(data => {
            calendar.innerHTML = data;
        });
}

const banner = document.getElementById('banner');
const images = [
  'nature-photo.png',
  'nature-photo1.png',
  'nature-photo2.png',
  'nature-photo3.png',
  'nature-photo4.png'
];
let currentIndex = 0;

function changeImage() {
  banner.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 3000); // Change image every 3 seconds

// Call the includeHTML function to load header and footer
includeHTML();
changeImage();

const calendar = document.getElementById('calendar');
const calendarMonthYear = document.getElementById('calendar-month-year');
const calendarBody = document.getElementById('calendar-body');

let currentDate = new Date();
let selectedDate = currentDate;

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  calendarMonthYear.textContent = `${year}/${month + 1}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let dayCounter = 1;
  calendarBody.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || dayCounter > daysInMonth) {
        row.innerHTML += '<td></td>';
      } else {
        const cell = document.createElement('td');
        cell.textContent = dayCounter;
        cell.classList.add('calendar-day');
        cell.onclick = () => selectDate(new Date(year, month, dayCounter));
        row.appendChild(cell);
        dayCounter++;
      }
    }

    calendarBody.appendChild(row);
  }
}

function prevMonth() {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  renderCalendar();
}

function nextMonth() {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  renderCalendar();
}

function selectDate(date) {
  selectedDate = date;
  alert(`Selected date: ${date.toDateString()}`);
}

renderCalendar();

