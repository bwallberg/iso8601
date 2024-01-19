const years = document.querySelector('span.years');
const months = document.querySelector('span.months');
const weeks = document.querySelector('span.weeks');
const days = document.querySelector('span.days');
const hours = document.querySelector('span.hours');
const minutes = document.querySelector('span.minutes');
const seconds = document.querySelector('span.seconds');

function setDuration(iso8601) {
  try {
    const duration = Temporal.Duration.from(iso8601);

    years.innerText = duration.years;
    months.innerText = duration.months;
    weeks.innerText = duration.weeks;
    days.innerText = duration.days;
    hours.innerText = duration.hours;
    minutes.innerText = duration.minutes;
    seconds.innerText = duration.seconds;
  } catch (e) {
    years.innerText = '-';
    months.innerText = '-';
    weeks.innerText = '-';
    days.innerText = '-';
    hours.innerText = '-';
    minutes.innerText = '-';
    seconds.innerText = '-';
	}
}

window.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('input');
    input.focus();

    input.addEventListener('input', ({ target: { value } }) => {
        setDuration(value);
    });
    setDuration(input.value)
});
