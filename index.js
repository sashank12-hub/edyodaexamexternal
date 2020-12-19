var username=document.getElementById("username");
var password=document.getElementById("password");
var submit=document.getElementById("submit");
submit.addEventListener("click",function(e){
    e.preventDefault();
    const usernamevalue = username.value;
    const passwordvalue = password.value;
    if(usernamevalue !== passwordvalue) {
        alert('Please Enter Valid Credentials!!!' )
    }

    else{
        var dataObj = {
            username: usernamevalue,
            password: passwordvalue
        }
        $.post('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login', dataObj, function() {
            alert('Login Successful!');
            localStorage.setItem('username', usernamevalue);
            localStorage.setItem('password', passwordvalue);
            
            location.assign('index2.html');
        })
       
    }
   
});