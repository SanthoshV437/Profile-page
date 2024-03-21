document.getElementById('gmail-btn').addEventListener('click', function () {
    var gmail_address = "svhollowblock00@gmail.com"; // replace your_email@gmail.com with your actual Gmail address
    var subject = "Hello"; // you can set the subject line here
    var body = "Hello,\n\nThis is a test email."; // you can set the email body text here
    var gmail_link = "mailto:" + gmail_address + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = gmail_link;
});
