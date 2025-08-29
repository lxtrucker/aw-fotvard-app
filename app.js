// Här lagrar vi de lediga tiderna. Åsa kan enkelt ändra denna lista.
const availableTimes = [
    { date: "Måndag, 9 sep", time: "10:00" },
    { date: "Tisdag, 10 sep", time: "13:30" },
    { date: "Onsdag, 11 sep", time: "09:00" },
    { date: "Torsdag, 12 sep", time: "15:00" }
];

// Koden som lägger till tiderna på hemsidan
const scheduleList = document.getElementById('schedule-list');

if (scheduleList) {
    availableTimes.forEach(slot => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${slot.date}:</span> ${slot.time}`;
        scheduleList.appendChild(listItem);
    });
}

// Hantera kontaktformuläret med AJAX
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Förhindra omdirigering

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = "Meddelandet har skickats! Vi återkommer snart.";
                form.reset(); // Rensa formuläret
            } else {
                formStatus.textContent = "Något gick fel. Försök igen.";
            }
        } catch (error) {
            formStatus.textContent = "Något gick fel. Kontrollera din anslutning.";
        }
    });
}
