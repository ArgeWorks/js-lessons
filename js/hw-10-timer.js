const Timer = (function () {
    // Variables
    let countdown,
        timeLeftElement,
        endTimeElement,
        alarmSound,
        defaultWelcomeText = 'Hello!',
        defaultText = 'Choose your interval :)';

    // Init settings
    function init(settings) {
        timeLeftElement = document.querySelector(settings.timeLeftSelector);
        endTimeElement = document.querySelector(settings.endTimeSelector);
        timeLeftElement.innerText = defaultWelcomeText;
        endTimeElement.innerText = defaultText;
        alarmSound = new Audio(settings.alarmSound);

        return this;
    }

    //Start timer
    function start(seconds) {
        // Check typeof seconds
        if (typeof seconds !== 'number') return new Error('Please provide seconds!');
        // Clear interval
        stop();
        // Get current timestamp
        const now = Date.now();
        // Get end time
        const then = now + seconds * 1000;

        // Show timer info
        displayTimeLeft(seconds);
        displayEndTime(then);

        // Timer
        countdown = setInterval(() => {
            let secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft < 0) {
                clearInterval(countdown);
                endTimeElement.innerText = document.title = 'Timer finished!';
                alarmSound.play();
                return;
            }

            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    // Stop timer
    function stop() {
        clearInterval(countdown);
        displayTimeLeft(0);
        endTimeElement.innerText = defaultText;
        alarmSound.pause();
        alarmSound.currentTime = 0;
    }

    // Show timer left
    function displayTimeLeft(seconds) {
        // Get UTC date
        let date = new Date(seconds * 1000),
            dateDays = date.getUTCDate() - 1,
            dateHours = date.getUTCHours(),
            dateMinutes = date.getUTCMinutes(),
            dateSeconds = date.getUTCSeconds(),

        // Format 2-digits
            formatDays = (dateDays < 10) ? '0' + dateDays + ':' : dateDays + ':',
            formatHours = (dateHours < 10) ? '0' + dateHours + ':' : dateHours + ':',
            formatMinutes = (dateMinutes < 10) ? '0' + dateMinutes : dateMinutes,
            formatSeconds = (dateSeconds < 10) ? '0' + dateSeconds : dateSeconds;

        // Check formatDays and formatHours, if formatDays != 00 and formatHours = 00 show days and hours together
        if (formatDays !== '00:' && formatHours === '00:') formatDays = formatDays + formatHours;
            
        // Format final string
        let time = `${(formatDays !== '00:') ? formatDays : ''}${(formatHours !== '00:') ? formatHours : ''}${formatMinutes}:${formatSeconds}`;

        // Display final string
        timeLeftElement.innerText = time;
        document.title = `Timer: ${time}`;
    }

    // Show timer end
    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        endTimeElement.innerText = `Be back at ${end.toLocaleString('ru')}`;
    }

    // Public methods
    return {
        init,
        start,
        stop
    };
}());

// Init timer settings
Timer.init({
    timeLeftSelector: '.display__time-left',
    endTimeSelector: '.display__end-time',
    alarmSound: 'audio/bell.mp3',
});

// Get elements
const customStartInput = document.forms.customForm;
const startBtns = document.querySelectorAll('[data-time]');
const stopBtn = document.querySelector('.timer__stop');

// Add event listener on all start buttons
startBtns.forEach(btn => btn.addEventListener('click', startTimer));
// Add event listener on custom timer
customStartInput.addEventListener('submit', startTimer);
// Add event listener on stop button
stopBtn.addEventListener('click', Timer.stop);

// Start time on click
function startTimer(e) {
    // Stop default action
    e.preventDefault();
    // Check event type and set seconds
    let seconds;
    if (e.type === 'submit') {
        seconds = parseInt(this.elements.minutes.value, 10) * 60;
        this.elements.minutes.value = '';
    } else seconds = Number(this.dataset.time);
    // Start timer
    Timer.start(seconds);
}

// Stop timer
function stopTimer(e) {
    Timer.stop;
}

