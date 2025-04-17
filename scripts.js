// Select the form element
const form = document.getElementById('cieSearch');

form.addEventListener('paper', function(event) {
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

    // Reset the form after submission
    form.reset();
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

    // Reset the form after submission
    form.reset();
});