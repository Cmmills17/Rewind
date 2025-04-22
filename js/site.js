//get the message that was entered
function getMessage() {
    //hide the resluts box if invalid string/text
    let alertDiv = document.getElementById('alertDiv');
    alertDiv.classList.add('invisible');
    // Find the input id="msgInput" element
    let inputElement = document.getElementById('msgInput');

    // Get what the user typed out of the <input />
    let userString = inputElement.value;

    // validate that the user typed at least 2 characters

    if (userString.length < 2) {
        // --> if not, show a swal
        Swal.fire(
            {
                backdrop: false,
                title: 'Uh Oh!',
                text: 'Please enter a message with at least 2 characters to reverse',
                icon: 'error',
            }
        );
    } else {
        // reverse the message
        let revString = reverseMessage(userString);

        //display the reversed message
        displayMessage(revString);
    }
}

// reverse the message
function reverseMessage(message) {

    let revWord = '';

    for (let idx = message.length - 1; idx >= 0; idx -= 1) {

        let char = message[idx];

        // revWord += char --> same thing
        revWord = revWord + char;
    }
    return revWord;
}

//display the message
function displayMessage(reversedMessage) {
    // put in the html, "your message reversed is: <b>reversedMessage</b>"
    let paragraphTag = document.getElementById('alertMsg');
    paragraphTag.innerHTML = `Your message reversed is: <b>${reversedMessage}</b>`;

    // remove the class of "invisible" from the alert
    let alertDiv = document.getElementById('alertDiv');
    alertDiv.classList.remove('invisible');
}