const adminDetails = {userName: "Vincent", passcode: "qwerty1234"};
const url = 'http://www.google.com/search/What is Nairobi?'; 

function log(receivedName) { 
    console.log(receivedName);
}

module.exports = {
    loggingFunction : log,
    endPoint : url};