alert("javascript is interlinked")

let isloggedin = 1; //if 0 loggedout if 1 login
// if(isloggedin==0){
//     document.write("Login");
// }

// else{
//     document.write("Logout")
// }

let option = isloggedin == 1 ? "Logout" : "Login";
    //    condition                 true       false
    document.write(option);