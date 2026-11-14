const welcome = document.getElementById("welcome");
const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {
  welcome.classList.add("is-hidden");
  document.body.classList.add("invitation-open");
});

const eventDate = new Date("2027-02-04T19:00:00");
const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function updateCountdown() {
  const difference = eventDate.getTime() - Date.now();
  if (difference <= 0) {
    Object.values(elements).forEach((element) => { element.textContent = "00"; });
    return;
  }
  const seconds = Math.floor(difference / 1000);
  elements.days.textContent = String(Math.floor(seconds / 86400)).padStart(3, "0");
  elements.hours.textContent = String(Math.floor((seconds % 86400) / 3600)).padStart(2, "0");
  elements.minutes.textContent = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  elements.seconds.textContent = String(seconds % 60).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("rsvpForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = new FormData(form).get("name");
  document.getElementById("formMessage").textContent = `Thank you, ${name}. We can’t wait to see you!`;
  form.reset();
});
