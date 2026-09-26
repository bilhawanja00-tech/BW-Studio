document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {

            if (response.ok) {
                alert("Thank you! Your message has been sent.");
                form.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }

        })
        .catch(error => {

            alert("Unable to send your message.");

        });

    });

});