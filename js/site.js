//get the message that was entered
function getMessage() {

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

}

//display the message
function displayMessage(reversedMessage) {

}