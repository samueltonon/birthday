AOS.init();

const dateEvent = new Date("May 13, 2025 20:00:00");
const timeStampEvent = dateEvent.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const timeStampCurrent = now.getTime();

    const distanceEvent = timeStampEvent - timeStampCurrent;

    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minsMs = 1000 * 60
    const secsMs = 1000

    const daysToEvent = Math.floor(distanceEvent / daysMs);
    const hoursToEvent = Math.floor((distanceEvent % daysMs) / hoursMs);
    const minsToEvent = Math.floor((distanceEvent % hoursMs) / minsMs);
    const secsToEvent = Math.floor((distanceEvent % minsMs) / secsMs)

    console.log(daysToEvent);
    console.log(hoursToEvent);
    console.log(minsToEvent);
    console.log(secsToEvent);

    document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minsToEvent}m ${secsToEvent}s`

    if (distanceEvent < 0) {
        clearInterval(countHours);
        document.getElementById('counter').innerHTML = 'Esse ano já foi, te espero ano que vem!'
    }
}, 1000);