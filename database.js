var emails = localStorage.getItem('emails');
if (emails === null) {
    emails = [];
} else {
    emails = JSON.parse(emails);
}
var tableBody = document.getElementById('emails-table-body');
emails.forEach(function(email) {
    var row = tableBody.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = email;
});