//if kollar om det finns en user eller annars inte inloggad
if  (localStorage.getItem(username,password) == document.getElementById('username','password').value)
    {  
        inLog();
    } 
    else {
        href="index.html";
    }          


function inLog(){
    document.getElementById('header').innerHTML = ("<h1>Välkommen till din sida </h1>");
    document.getElementById('content').innerHTML = ('<p> Du är nu inloggad på din sida</p> <br> <p>Vill du logga ut </p');
    document.getElementById('but').innerHTML = ("<input type='button' value='logga ut' onClick='localStorage.clear(); outLog().innerHTML;'/>");
    }

function outLog(){
    document.getElementById('header').innerHTML = ("<h1> Du är nu utloggad</h1>");
    document.getElementById('content').innerHTML = ("<p>Vill du logga in igen <a href='index.html'>Logga in</a> </p>")
    document.getElementById('but').innerHTML = ('');
    //tömma localStorage
    }

function errLog(){
   document.getElementById("header").innerHTML =('Gick ej att logga in');
   document.getElementById("content").innerHTML =("fel vid inloggning, <p>Vill du testa logga in igen <a href='index.html'>Logga in </a> </p>");
   document.getElementById('but').innerHTML = ('');
   }

  button.addEventListener ('click', function (){
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value
    if(username=="test" && password=="1234"){
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);
        //Spara user i localStorage
        inLog();
    }
    else {  
        errLog();
    }
})