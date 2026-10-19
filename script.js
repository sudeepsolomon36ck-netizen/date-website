let yesSize = 18;
let yesPadding = 14;

function sayYes() {

    window.location.href = "date.html";

}


function sayNo() {

    const message =
        document.getElementById("noMessage");

    const yesButton =
        document.querySelector(".yes-btn");


    // Increase YES button size

    yesSize += 4;
    yesPadding += 3;

    yesButton.style.fontSize =
        yesSize + "px";

    yesButton.style.padding =
        yesPadding + "px " +
        (yesPadding + 20) + "px";


    // Show message

    message.innerHTML =
        "Are you sure? ❤️ Think about it one more time!";


    message.style.display = "block";


    // Hide message after 5 seconds

    setTimeout(function() {

        message.style.display = "none";

    }, 5000);

}