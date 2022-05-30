const LoginForm = document.querySelector("#login-form");
const LoginInput = LoginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const one = document.querySelector(".one");
const two = document.querySelector(".two");



function handleSubmit(event){
    event.preventDefault();
    const name = LoginInput.value;
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,name);
    handleGreeting();
    // greeting.innerHTML = `Hello${name}`;
    // LoginInput.value = '';
    // SaveLocalName(name);
}

function handleGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit",handleSubmit);
}else{
    
    handleGreeting();
}

const front = document.querySelector(".front");
const back = document.querySelector(".back");
// one.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log('ya');
//     front.classList.toggle('on');
//     back.classList.toggle('on');
// });

one.addEventListener("click", function(e){
    e.preventDefault();
    one.classList.toggle('on');
    front.classList.toggle('on');
    back.classList.toggle('on');
});