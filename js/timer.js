const timer = (function () {
    let countdown,
        displayTimeLeft,
        displayEndTime,
        alarmSound;

    function init(settings) {
        displayTimeLeft = document.querySelector(settings.displayTimeLeftSelector);
        displayEndTime = document.querySelector(settings.displayEndTimeSelector);

        displayTimeLeft.innerText = 'Hello!';
        displayEndTime.innerText = 'Choose you timer :)';
    }

    return {
        init
    };
}());

timer.init({
    displayTimeLeftSelector: '.display__time-left',
    displayEndTimeSelector: '.display__end-time'
});