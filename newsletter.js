function subscribe() {
    var email = document.getElementById('email').value;
    if (email === '') {
        alert('Please enter your email');
        return;
    }
    var emails = localStorage.getItem('email');
    if (emails === null) {
        emails = [];
    } else {
        emails = JSON.parse(emails);
    }
    emails.push(email);
    localStorage.setItem('emails', JSON.stringify(emails));
    alert('You have successfully subscribed to our newsletter');
    document.getElementById('email').value = '';
}