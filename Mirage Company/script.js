function login()
{
    const user = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if (user == "enzogabrielxd656@gmail.com" && senha == 12345)
    {
        alert("Logado com sucesso !!!");
    }
    else
    {
        alert("Fracasso no login !!!");
    }
}