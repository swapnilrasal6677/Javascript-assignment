// ___________________________________SUCCESS MESSAGE __________________________________

(function(){
    let p = sessionStorage.getItem('test')
    if(p == 5){
        console.log("Signup Sucessful");
        document.getElementById("success").style.display="block";
        sessionStorage.removeItem('test')
    }
    else
    {
        console.log("Signup Sucessful");
        document.getElementById("failure").style.display="block";
    }
})();

// _________________________________VALIDATE USERNAME __________________________________

function valuser(username)
{
    console.log(username);

    if(localStorage.getItem(username)){
        console.log("user Found");
        document.getElementById("usernameError").style.display="block";
        document.getElementById("usernameError").innerHTML="&#x2713";
        document.getElementById("usernameError").style.color="green";
    }      
    else{
        console.log("user Not Found");
        document.getElementById("usernameError").style.display="block";
        document.getElementById("usernameError").innerHTML="Invalid UserName or Password";
        document.getElementById("usernameError").style.color="red";
       
    }
}

// ____________________________VALIDATE USERNAME AND PASSWORD FOR LOGIN_____________________________

function checklogin()
{
            var username = document.getElementById("user").value;
            var userpass = document.getElementById("pass").value;
            var userDetails = JSON.parse(localStorage.getItem(username));
            //     console.log(userDetails);
            if(localStorage.getItem(username)){
                console.log("user Found");
               
                if(userDetails.password !== userpass){
                    console.log("Invalid UserName or Password");
                    document.getElementById("passwordError").style.display="block";
                    document.getElementById("passwordError").innerHTML="Invalid UserName Or Password";
                    document.getElementById("passwordError").style.color="red";
                }
                else{
                    console.log("password match");
                    sessionStorage.setItem('test',5);
                    window.location="./mainpage.html";
                    sessionStorage.setItem('uname',username);
                }
            }      
            else{
                document.getElementById("passwordError").style.display="block";
                document.getElementById("passwordError").innerHTML="Invalid UserName Or Password";
                document.getElementById("passwordError").style.color="red";           
             }
}

