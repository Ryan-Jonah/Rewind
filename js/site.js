/**
 * Get input string from user
 * Controller Function
 */
function getValue(){
    document.getElementById('alert').classList.add('invisible');

    let userString = document.getElementById('userString').value;

    let revString = reverseString(userString);

    displayString(revString);
}

/**
 * Reverse the string
 * Logic Function
 */
function reverseString(string){
    let revString = [];
      
    for (let index = string.length-1; index >= 0; index--) {
        revString += string[index];
    }

    return revString;
}

/**
 * Display message with reversed string
 * View Function
 */
function displayString(string){
    //write message to page 
    document.getElementById('message').innerHTML = `Your string reversed is ${string}`;

    //show the alert box
    document.getElementById('alert').classList.remove('invisible');
}