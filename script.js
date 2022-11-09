// candidate

document.querySelector("#show-btn").addEventListener("click", function () {
    document.querySelector(".candidate-login").classList.add("active");
});
document.querySelector(".candidate-login .close-btn").addEventListener("click", function () {
    document.querySelector(".candidate-login").classList.remove("active");
});


// employeee


document.querySelector("#show-btn1").addEventListener("click", function () {
    document.querySelector(".employee-login").classList.add("allow");
});
document.querySelector(".employee-login .close-btn1").addEventListener("click", function () {
    document.querySelector(".employee-login").classList.remove("allow");
});


//candidate login alert

function login(){
    var user = document.form.username.value;
    var pass = document.form.password.value;
    
    if(user == " " || pass == ""){
        alert("Please Enter Email id & Password");
    }
}


// employee login

function employe(){
    var username = document.form.username.value;
    var password = document.form.password.value;
    
    if (username == "" || password == "") {
        alert("Please Enter Email id & Password");
    } 
}




// function employe(){
//     var username1 = document.form.employeeid.value;
//     var password1 = document.form.employeepass.value;

//     if(username1 == "admin123" || password1 == "admin"){
//         location.replace("https://www.w3schools.com")
//     }
//     else{
//         alert("Please Enter Correct Details");
//     }
//     return;

// }