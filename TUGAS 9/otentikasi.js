let user, pass;
user = document.getElementById("user")
pass = document.getElementById("pass")

key ={
    username : "aulia2021",
    password : "nicenf"
}

function process(){

    if(user.value == key.username && pass.value == key.password){
        alert("Login Sukses")
        document.write("<h1>Login Sukses</h1>")
    } else {
        alert("Login Gagal")
    }
}