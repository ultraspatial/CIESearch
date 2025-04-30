// Set the target date (e.g., New Year's Day 2024)
const targetDate = new Date("May 9, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  // Update the DOM
  document.getElementById("days").textContent = String(days).padStart(2, "0");
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to avoid delay on first render
updateCountdown();

// Select the form element
const form = document.getElementById('cieSearch');
document.getElementById('paper').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Collect form data
    const subject = document.getElementById('subject').value;
    const year = document.getElementById('year').value;
    const session = document.getElementById('session').value;
    const variant = document.getElementById('variant').value;
    const doctype = document.getElementById('docType').value;

    let sessionchar;
    if (session === 'MJ') {
        sessionchar = 's'}
    else if (session === 'ON') {
        sessionchar = 'w'}
    else if (session === 'FM') {
        sessionchar = 'm'}



    const url = 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/' + subject + '_' + sessionchar + year.slice(-2) + '_' + doctype + '_' + variant + '.pdf'

    window.open(url, '_blank');

});


document.getElementById('yt').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Collect form data
        const subject = document.getElementById('subject').value;
        const year = document.getElementById('year').value;
        const session = document.getElementById('session').value;
        const variant = document.getElementById('variant').value;
        const doctype = document.getElementById('docType').value;


        let sessioncode;
        if (session === 'MJ') {
            sessioncode = 'M/J'}
        else if (session === 'ON') {
            sessioncode = 'O/N'}
        else if (session === 'FM') {
            sessioncode = 'F/M'}


    const yturl = 'https://www.youtube.com/results?search_query=' + subject + '/' + variant + '/' + sessioncode + '/' +  year.slice(-2)

    window.open(yturl, '_blank');
});

document.getElementById('resetForm').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Reset the form after submission
    form.reset();
});