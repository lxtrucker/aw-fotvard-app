// Här lagrar vi de lediga tiderna. Åsa kan enkelt ändra denna lista.
const availableTimes = [
    { date: "Måndag, 9 sep", time: "10:00" },
    { date: "Tisdag, 10 sep", time: "13:30" },
    { date: "Onsdag, 11 sep", time: "09:00" },
    { date: "Torsdag, 12 sep", time: "15:00" }
];

// Här är koden som lägger till tiderna på hemsidan
const scheduleList = document.getElementById('schedule-list');

availableTimes.forEach(slot => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${slot.date}:</span> ${slot.time}`;
    scheduleList.appendChild(listItem);
});