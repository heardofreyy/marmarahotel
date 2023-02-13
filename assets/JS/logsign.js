const signBtn = document.getElementById('sign-btn');
const logBtn = document.getElementById('log-btn');
const LSTitle = document.getElementById('logsign-title');



signBtn.addEventListener('click', () => {
    console.log("sign in");
    LSTitle.innerText = "Sign Up";

});

logBtn.addEventListener('click', () => {
    console.log("log in");
    LSTitle.innerText = "Log In";

});